import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <h1>Hi Siddhesh, {name} has just sent you a message!</h1>
    <p>{name}&apos;s email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
