'use client';

import HeroTools from './HeroTools';
import gmail from '../../public/gmail.svg';
import dropbox from '../../public/dropbox.svg';
import paypal from '../../public/paypal.svg';
import slack from '../../public/slack.svg';
import wallet from '../../public/wallet.svg';
import discord from '../../public/discord.svg';
import shopify from '../../public/shopify.svg';
import { ScrollParallax } from 'react-just-parallax';

function HeroToolsJoined() {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <div className="space-y-3 -translate-y-10">
        <HeroTools text="Emailing" image={gmail} />
        <HeroTools text="Storage" image={dropbox} />
      </div>
      <div className="space-y-3">
        <HeroTools text="Billing" image={paypal} />
        <HeroTools text="Texting" image={slack} />
        <HeroTools text="Manage" image={wallet} />
      </div>
      <div className="space-y-3">
        <HeroTools text="Voicemail" image={discord} />
        <HeroTools text="Marketing" image={shopify} />
      </div>
    </div>
  );
}

export default HeroToolsJoined;
