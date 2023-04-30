import './NotImplementedPage.css';
import Scotty from '../../assets/images/scotty.png';

export default function NotImplementedPage() {
  return (
    <main id='NotImplemented'>
      <img src={Scotty} alt='Scotty' />
      Oops, this page doesn't exist yet... how about a shirt from the last page?
    </main>
  );
}
