# Example of enabling overflow on a textbox using a script

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview 
Simple example of using a script to modify the css of a control.  In this instance it will be setting the overflowY of a textbox to auto.  Alternative solutions would be to use the base theme css, this however is a javascript only solution.  You will need to set the textbox to multiline otherwise a console.log warning will be displayed.

## Code quick reference 

```javascript 
function SetMultiline(Textbox) {

     var id = Textbox.getId();
     var texboxElement = document.getElementById(id);
     var texboxInnerInputField = texboxElement.getElementsByTagName("textarea")[0];

     if (texboxInnerInputField)
          texboxInnerInputField.style.overflowY = "auto";
     else
          console.log("You must enable Multiline on the Textbox '" + id +"' first");

}
```

## TwinCAT
This project uses TcXaeShell 3.1.4024.15 and TwinCAT HMI 1.12.746.3
