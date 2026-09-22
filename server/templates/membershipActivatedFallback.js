export const membershipActivatedHtmlFallback = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sellitsellitsellit.com - Onboarding &amp; Instructions</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 32px 12px;">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table width="640" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 640px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07); border: 1px solid #e2e8f0;">
            
            <!-- Header Bar -->
            <tr>
              <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 24px 32px; border-bottom: 3px solid #f59e0b;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle">
                      <div style="color: #ffffff; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                        Sellitsellitsellit<span style="color: #fbbf24;">.com</span>
                      </div>
                      <div style="color: #94a3b8; font-size: 12px; margin-top: 4px; letter-spacing: 0.3px;">
                        Partner Platform: Buypersonalitems.com
                      </div>
                    </td>
                    <td align="right" valign="middle">
                      <span style="display: inline-block; background-color: rgba(251, 191, 36, 0.15); border: 1px solid #fbbf24; color: #fbbf24; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 6px 12px; border-radius: 999px;">
                        Onboarding Guide
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hero / Welcome Banner -->
            <tr>
              <td style="padding: 32px 32px 20px 32px; background-color: #ffffff;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <!-- Activation Badge -->
                      <div style="display: inline-block; background-color: #ecfdf5; border: 1px solid #a7f3d0; color: #047857; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 999px; margin-bottom: 16px;">
                        &#10003;&nbsp; Membership Activated &bull; {{displayAmount}} Paid
                      </div>
                      
                      <h1 style="margin: 0 0 16px 0; color: #0f172a; font-size: 26px; font-weight: 800; line-height: 1.35;">
                        Welcome aboard, {{userName}}!
                      </h1>

                      <p style="margin: 0 0 16px 0; color: #334155; font-size: 15px; line-height: 1.7;">
                        Thank you for joining us in what we truly believe will prove to be one of the best choices you have made in a very long time. If our predictions prove true and our economy continues in its current direction, we are going to make a lot of money together.
                      </p>

                      <p style="margin: 0 0 16px 0; color: #334155; font-size: 15px; line-height: 1.7;">
                        For many in our country, our platform will be their last hope of securing much-needed financial relief by converting personal assets into <strong>Hard Cash</strong>. You and I did not create these challenging economic conditions, but together we offer a practical, reliable solution.
                      </p>

                      <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px 18px; border-radius: 0 10px 10px 0; margin-top: 18px;">
                        <p style="margin: 0; color: #475569; font-size: 14px; font-style: italic; line-height: 1.6;">
                          Please accept this onboarding letter as your official record of receipt.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Membership Account Summary Card -->
            <tr>
              <td style="padding: 0 32px 24px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 14px; padding: 22px 24px; color: #ffffff;">
                  <tr>
                    <td valign="middle">
                      <div style="color: #94a3b8; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
                        Member Username
                      </div>
                      <div style="color: #fbbf24; font-size: 20px; font-weight: 800; margin-top: 4px; word-break: break-all;">
                        {{userName}}
                      </div>
                      <div style="color: #cbd5e1; font-size: 13px; margin-top: 6px;">
                        Plan: <strong style="color: #ffffff;">{{planName}}</strong>
                      </div>
                    </td>
                    <td align="right" valign="middle">
                      <div style="color: #94a3b8; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
                        Fee Paid
                      </div>
                      <div style="color: #34d399; font-size: 28px; font-weight: 800; margin-top: 4px;">
                        {{displayAmount}}
                      </div>
                      <div style="color: #94a3b8; font-size: 12px; margin-top: 4px;">
                        One-Time Membership
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Section Divider -->
            <tr>
              <td style="padding: 0 32px;">
                <div style="height: 1px; background-color: #e2e8f0;"></div>
              </td>
            </tr>

            <!-- Onboarding Instructions Section -->
            <tr>
              <td style="padding: 28px 32px 16px 32px;">
                <h2 style="margin: 0 0 6px 0; color: #0f172a; font-size: 18px; font-weight: 800;">
                  Step-by-Step Instructions to Get Started
                </h2>
                <p style="margin: 0 0 20px 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                  Follow these quick steps to access your seller account and list your items.
                </p>

                <!-- Step 1 -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 14px;">
                  <tr>
                    <td width="52" valign="top" style="padding: 16px 0 16px 18px;">
                      <div style="width: 32px; height: 32px; line-height: 32px; border-radius: 50%; background-color: #0f172a; color: #ffffff; text-align: center; font-weight: 800; font-size: 14px;">
                        1
                      </div>
                    </td>
                    <td valign="top" style="padding: 16px 18px 16px 12px;">
                      <div style="color: #0f172a; font-size: 15px; font-weight: 700; margin-bottom: 4px;">
                        Visit the Seller Platform
                      </div>
                      <div style="color: #475569; font-size: 14px; line-height: 1.6;">
                        Go to our seller platform at: 
                        <a href="https://buypersonalitems.com" target="_blank" style="color: #2563eb; font-weight: 700; text-decoration: underline;">
                          Buypersonalitems.com
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Step 2 -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 14px;">
                  <tr>
                    <td width="52" valign="top" style="padding: 16px 0 16px 18px;">
                      <div style="width: 32px; height: 32px; line-height: 32px; border-radius: 50%; background-color: #0f172a; color: #ffffff; text-align: center; font-weight: 800; font-size: 14px;">
                        2
                      </div>
                    </td>
                    <td valign="top" style="padding: 16px 18px 16px 12px;">
                      <div style="color: #0f172a; font-size: 15px; font-weight: 700; margin-bottom: 4px;">
                        Log In &amp; Set Up Your Password
                      </div>
                      <div style="color: #475569; font-size: 14px; line-height: 1.6;">
                        Enter your username: <strong style="color: #0f172a; background-color: #e2e8f0; padding: 2px 8px; border-radius: 4px;">{{userName}}</strong>, then enter or create your password.
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Step 3 -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 20px;">
                  <tr>
                    <td width="52" valign="top" style="padding: 16px 0 16px 18px;">
                      <div style="width: 32px; height: 32px; line-height: 32px; border-radius: 50%; background-color: #0f172a; color: #ffffff; text-align: center; font-weight: 800; font-size: 14px;">
                        3
                      </div>
                    </td>
                    <td valign="top" style="padding: 16px 18px 16px 12px;">
                      <div style="color: #0f172a; font-size: 15px; font-weight: 700; margin-bottom: 6px;">
                        Start Listing Your Items for Sale
                      </div>
                      <div style="color: #475569; font-size: 14px; line-height: 1.6;">
                        Inside your account dashboard, you have full control to:
                      </div>
                      <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 8px;">
                        <tr>
                          <td style="color: #059669; font-size: 14px; font-weight: bold; padding-right: 8px; vertical-align: top;">&bull;</td>
                          <td style="color: #334155; font-size: 14px; line-height: 1.6;">Post items for sale with photos and details</td>
                        </tr>
                        <tr>
                          <td style="color: #059669; font-size: 14px; font-weight: bold; padding-right: 8px; vertical-align: top;">&bull;</td>
                          <td style="color: #334155; font-size: 14px; line-height: 1.6;">Set and adjust your asking prices anytime</td>
                        </tr>
                        <tr>
                          <td style="color: #059669; font-size: 14px; font-weight: bold; padding-right: 8px; vertical-align: top;">&bull;</td>
                          <td style="color: #334155; font-size: 14px; line-height: 1.6;">Update, replace, or remove listings before and after sales</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Recommendation Box -->
                <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px 20px; margin-bottom: 20px;">
                  <div style="color: #1e40af; font-size: 14px; font-weight: 700; margin-bottom: 4px;">
                    &#128161; Recommendation for Fast Results:
                  </div>
                  <div style="color: #1e3a8a; font-size: 14px; line-height: 1.65;">
                    We recommend gathering all items you wish to sell now. Take clear, well-lit photos for uploading and check competitive pricing to attract buyers quickly.
                  </div>
                </div>

                <!-- Call to Action Button -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 24px 0 10px 0;">
                  <tr>
                    <td align="center">
                      <a href="https://buypersonalitems.com" target="_blank" style="display: inline-block; background-color: #f59e0b; color: #0f172a; font-size: 15px; font-weight: 800; text-decoration: none; padding: 14px 32px; border-radius: 10px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                        Go to Buypersonalitems.com &rarr;
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Email Confirmation Box -->
                <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 14px 18px; margin-top: 20px;">
                  <div style="color: #92400e; font-size: 13px; line-height: 1.6;">
                    <strong>Important:</strong> Please send a quick email to 
                    <a href="mailto:info@salepersonalitems.com" style="color: #b45309; font-weight: 800; text-decoration: underline;">
                      info@salepersonalitems.com
                    </a> 
                    to confirm that you have received these onboarding instructions.
                  </div>
                </div>

                <!-- Account details section injected dynamically if new user -->
                {{accountDetailsSection}}

              </td>
            </tr>

            <!-- Payment Receipt Details Section -->
            <tr>
              <td style="padding: 12px 32px 28px 32px;">
                <div style="font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #64748b; margin-bottom: 14px; border-top: 1px solid #e2e8f0; padding-top: 22px;">
                  Payment Receipt &amp; Details
                </div>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate; border-spacing: 0 8px;">
                  <tr>
                    <td width="50%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #334155;">
                      <span style="display: block; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; margin-bottom: 4px;">Payment Method</span>
                      <strong style="color: #0f172a; font-size: 14px;">{{paymentMethod}}</strong>
                    </td>
                    <td width="10"></td>
                    <td width="50%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #334155;">
                      <span style="display: block; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; margin-bottom: 4px;">Transaction ID</span>
                      <strong style="color: #0f172a; font-size: 14px; word-break: break-all;">{{transactionId}}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #334155;">
                      <span style="display: block; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; margin-bottom: 4px;">Payment Date</span>
                      <strong style="color: #0f172a; font-size: 14px;">{{paymentDate}}</strong>
                    </td>
                    <td width="10"></td>
                    <td width="50%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #334155;">
                      <span style="display: block; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; margin-bottom: 4px;">Membership Period</span>
                      <strong style="color: #0f172a; font-size: 14px;">{{membershipPeriod}}</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Sign-Off Banner -->
            <tr>
              <td style="padding: 0 32px 32px 32px;">
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #fcd34d; border-radius: 12px; padding: 18px 24px; color: #78350f; font-size: 16px; font-weight: 800; text-align: center; letter-spacing: 0.3px;">
                  Again, Welcome Aboard &mdash; Let's Achieve Great Success Together!
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #0f172a; padding: 24px 32px; color: #94a3b8; font-size: 13px; line-height: 1.7;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <div style="color: #ffffff; font-weight: 700; font-size: 14px; margin-bottom: 4px;">
                        Need Help or Have Questions?
                      </div>
                      <div style="color: #94a3b8;">
                        Reply directly to this email or contact us anytime at 
                        <a href="mailto:info@salepersonalitems.com" style="color: #fbbf24; text-decoration: underline; font-weight: 600;">
                          info@salepersonalitems.com
                        </a>.
                      </div>
                      <div style="color: #64748b; font-size: 11px; margin-top: 14px;">
                        &copy; Sellitsellitsellit.com &bull; Buypersonalitems.com. All rights reserved.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
          <!-- End Main Container -->
        </td>
      </tr>
    </table>
  </body>
</html>
`;
