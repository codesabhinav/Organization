import React from 'react';
import Link from 'next/link';

const FooterSocial = () => {
  return (
    <div className="tz-footer__socials">
      <Link href="/" className="tz-footer__social-link">
        <i className="ph ph-facebook-logo" />
      </Link>
      <Link href="/" className="tz-footer__social-link">
        <i className="ph ph-twitch-logo" />
      </Link>
      <Link href="/" className="tz-footer__social-link">
        <i className="ph ph-instagram-logo" />
      </Link>
      <Link href="/" className="tz-footer__social-link">
        <i className="ph ph-discord-logo" />
      </Link>
    </div>
  );
};

export default FooterSocial;