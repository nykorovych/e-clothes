import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = 'pk_test_51HCLMSBpknWwBwWCuPeJhnLp3wmzn7Z759cAdmlpsupfwkiKI4zW3SxsmXGFg1g3GQFKl01XI755IaXGlrVgEzaa00DLtk60s8'
    const onToken = token => {
        console.log(token)
        alert("PAYED")
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton