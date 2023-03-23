import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SendEmail = () => {
  return (
    <div class="login">
      <div class="form-container">
        <Image src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />

        <h1 class="title">Email has been sent!</h1>
        <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>

        <div class="email-image">
          <Image src="./icons/email.svg" alt="email" />
        </div>

        <button class="primary-button login-button">Login</button>

        <p class="resend">
          <span>Didn&apos;t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
