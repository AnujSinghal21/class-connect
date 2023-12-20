# Steps for parsing 
## 1. Convert to excel online (adobe.com)
## 2. Convert to table and Remove Duplicates header rows
## 3. Use formulas to resolve inconsistent newlines, (schedule.xlsx may help)
## 4. Save the final schedule to a new excel file, name it 'Extracted_Schedule.xlsx'
## 5. Change the headers as in the current Extracted_Schedule.xlsx, do basic format check
## 6. Run this script 

import pandas as pd
import json
import re
# Specify the path to your Excel file
excel_file_path = 'Extracted_Schedule.xlsx'

# Read the Excel file into a pandas DataFrame
df = pd.read_excel(excel_file_path)

# Process each row in easy to use format
def process_row(row):
    course = {}
    course['SNO'] = row.SNO
    tcredits=row.Credits
    ccredits=""
    found=0
    for i in range(len(tcredits)):
        if(tcredits[i]=='('):
            found=1
            continue
        if(tcredits[i]==')'):
            break
        if(found==1):
            ccredits+=tcredits[i]
        
    course['credits']=int(ccredits)
    course['branch'] = row.Branch.strip()
    course['name'] = row.CourseName.strip()
    match = re.search(r'\((.*?)\)[^()]*$', row.CourseName.strip())
    if match:
        course['code'] = match.group(1)
    else:
        course['code'] = ""
        print("Code could not be extracted", row)
    course['slotName'] = row.SlotName.strip()
    course['instructors'] = [{"name": i.strip(), "email": e.strip()}  for (i, e) in zip(row.Instructor.split(','), row.InstructorEmail.split(','))]

    row.Lectures = row.Lectures.strip().replace('Th', 'H').replace(' ', '')
    timePattern = re.compile(r'([MTWHF]+)(\d{2}:\d{2})-(\d{2}:\d{2})')
    matches = re.findall(timePattern, row.Lectures)
    schedule_list = [{'day': match[0], 'start': match[1], 'end': match[2]} for match in matches]
    course['lectures'] = []
    for sch in schedule_list:
        unique_days = list(sch['day'])
        for d in unique_days:
            course['lectures'].append({'day': ('Th' if d == 'H' else d) , 'start': sch['start'], 'end': sch['end']})

    row.Tutorials = row.Tutorials.strip().replace('Th', 'H').replace(' ', '')
    timePattern = re.compile(r'([MTWHF]+)(\d{2}:\d{2})-(\d{2}:\d{2})')
    matches = re.findall(timePattern, row.Tutorials)
    schedule_list = [{'day': match[0], 'start': match[1], 'end': match[2]} for match in matches]
    course['tutorials'] = []
    for sch in schedule_list:
        unique_days = list(sch['day'])
        for d in unique_days:
            course['tutorials'].append({'day': ('Th' if d == 'H' else d) , 'start': sch['start'], 'end': sch['end']})

    row.Labs = row.Labs.strip().replace('Th', 'H').replace(' ', '')
    timePattern = re.compile(r'([MTWHF]+)(\d{2}:\d{2})-(\d{2}:\d{2})')
    matches = re.findall(timePattern, row.Labs)
    schedule_list = [{'day': match[0], 'start': match[1], 'end': match[2]} for match in matches]
    course['labs'] = []
    for sch in schedule_list:
        unique_days = list(sch['day'])
        for d in unique_days:
            course['labs'].append({'day': ('Th' if d == 'H' else d) , 'start': sch['start'], 'end': sch['end']})

    return course

# Get the list of courses formatted
course_list = list(df.apply(process_row, axis=1))
print(len(course_list))

# convert to json
json_string = json.dumps(course_list, indent=4)
json_path = 'courses.json'

with open(json_path, 'w') as json_file:
    json_file.write(json_string)