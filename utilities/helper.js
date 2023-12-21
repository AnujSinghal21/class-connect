// The file contains helper functions, mostly meant for data cleaning

function cleanEmail(email){
    
    let at=0;
    let n= email.length;
    let cleanmail="";

    for(let i=0;i<n;i++)
    {
        if(at==1 && email[i]=='n')
        {
            cleanmail+=email[i];
            break;
        }
        else if(email[i]=='@')
        {
            cleanmail+=email[i];
            at=1;
        }
        else if(email[i]=='.')
        {
            cleanmail+=email[i];
        }
        else if(email[i]>='a' && email[i]<='z')
        {
            cleanmail+=email[i];
        }
        else if(email[i]>='0' && email[i]<='9')
        {
            cleanmail+=email[i];
        }
    }

    return cleanmail;
}

// let testcase="       !!!#$%!#&$%**$*%chinmay ma21@iitk. ac. i  n    ";
// let cleaned_mail=cleanEmail(testcase);

// console.log(cleaned_mail);
// console.log(cleaned_mail.length);

module.exports.cleanEmail=cleanEmail;