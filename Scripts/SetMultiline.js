// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../Packages/Beckhoff.TwinCAT.HMI.Framework.12.746.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var demo_hmi_textbox;
        (function (demo_hmi_textbox) {
            function SetMultiline(Textbox) {

                var id = Textbox.getId();
                var texboxElement = document.getElementById(id);
                var texboxInnerInputField = texboxElement.getElementsByTagName("textarea")[0];

                if (texboxInnerInputField)
                    texboxInnerInputField.style.overflowY = "auto";
                else
                    console.log("You must enable Multiline on the Textbox '" + id +"' first");

            }
            demo_hmi_textbox.SetMultiline = SetMultiline;
        })(demo_hmi_textbox = Functions.demo_hmi_textbox || (Functions.demo_hmi_textbox = {}));
        Functions.registerFunctionEx('SetMultiline', 'TcHmi.Functions.demo_hmi_textbox', demo_hmi_textbox.SetMultiline);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);