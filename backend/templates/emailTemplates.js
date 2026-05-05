const getEmailTemplate = (otp) => ({
  subject: 'Your PrintEase verification code',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333;">
      <h2 style="color: #222222; margin-bottom: 16px;">PrintEase verification code</h2>
      <p>Hello,</p>
      <p>Use the verification code below to continue with your PrintEase request.</p>
      <div style="background-color: #f6f8fb; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; text-align: center; margin: 24px 0;">
        <h1 style="color: #1d4ed8; font-size: 32px; letter-spacing: 6px; margin: 0;">${otp}</h1>
      </div>
      <p>This code is valid for 5 minutes.</p>
      <p>For a smoother experience, enter it in the PrintEase app or website to complete verification.</p>
      <p>Thank you,<br>PrintEase Team</p>
    </div>
  `,
});

export default getEmailTemplate;
