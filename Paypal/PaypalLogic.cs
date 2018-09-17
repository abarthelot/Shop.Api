using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ShopApp.API.Paypal
{
    public class PaypalLogic
    {
        public static PaypalRedirect ExpressCheckout(PaypalOrder order)
        {
            Dictionary<string, string> values = new Dictionary<string, string>();

            values["USER"] = PaypalSettings.Username;
            values["PWD"] = PaypalSettings.Password;
            values["SIGNATURE"] = PaypalSettings.Signature;
            values["METHOD"] = "SetExpressCheckout";
            values["VERSION"] = "93";
            values["RETURNURL"] = PaypalSettings.ReturnUrl;
            values["CANCELURL"] = PaypalSettings.CancelUrl;
            values["AMT"] = order.Amount.ToString();
            values["TRXTYPE"] = "S";
            values["CURRENCYCODE"] = "USD";

            values = Submit(values);

            string ack = values["ACK"].ToLower();

            if (ack == "success" || ack == "successwithwarning")
            {
                return new PaypalRedirect{
                        Token = values["TOKEN"],
                        Url = string.Format("{0}?cmd=express-checkout&token={1}", PaypalSettings.CgiDomain, values["TOKEN"])
                    };
            }
            else
            {
                throw new Exception(values["L_LONGMESSAGE0"]);
            }
        }

        private static Dictionary<string, string> Submit(Dictionary<string, string> values)
        {
            HttpContent httpContent = new FormUrlEncodedContent(values);
            Task<HttpResponseMessage> httpResponse = new HttpClient().PostAsync(PaypalSettings.ApiDomain, httpContent);

            string responseResult = httpResponse.Result.Content.ReadAsStringAsync().Result;
            Dictionary<string, StringValues> result = Microsoft.AspNetCore.WebUtilities.QueryHelpers.ParseQuery(responseResult);
            Dictionary<string, string> finalResult = result.ToDictionary(item => item.Key, item => item.Value[0]);
            return finalResult;
        }
    }
}
