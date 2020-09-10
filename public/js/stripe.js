import axios from 'axios'
import { showAlert } from './alerts'
const stripe = Stripe('pk_test_51HPlWPCLpVwvnP0IAlI6vi8hcZszAG3ZnuLHOCbaBxemuSAVDROFDFbJh5BtweKLneH3G64FrOnmckhVFbXo1IYK00iaGvZCnx')

export const bookTour = async tourId => {
  try{
    // 1)  Get Checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`)
    // 2)  Create checkout form + charge card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    })

  } catch(err){
    showAlert('error', err);
  }
}