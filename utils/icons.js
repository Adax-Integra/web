import { MapPin, Phone, Mail } from 'lucide-static';
import { siFacebook, siInstagram, siX, siYoutube, siSpotify, siWhatsapp } from 'simple-icons';

const lucideIcons = { MapPin, Phone, Mail };

// lucide-static returns the full <svg>; swap its class for the Tailwind classes we pass
const lucide = (name, className) =>
  lucideIcons[name].replace(/class="[^"]*"/, `class="${className}" aria-hidden="true"`);

export default { lucide, siFacebook, siInstagram, siX, siYoutube, siSpotify, siWhatsapp };
