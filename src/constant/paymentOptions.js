import bkashQR from '@public/bill_pay/bkash.png'
import nagadQR from '@public/bill_pay/nagad.png'
import rocketQR from '@public/bill_pay/rocket.png'

const paymentOptions = [
    {
        title:
            "Payment via Bkash",
        description:
            "QR Code টি স্ক্যান করুন এবং রেফারেন্স এ আপনার নাম ও এরিয়া লিখে দিবেন",
        image: bkashQR,
    },
    {
        title:
            "Payment via Nagad",
        description:
            "QR Code টি স্ক্যান করুন এবং রেফারেন্স এ আপনার নাম ও এরিয়া লিখে দিবেন",
        image: nagadQR,
    },
    {
        title:
            "Payment via Rocket",
        description:
            "QR Code টি স্ক্যান করুন এবং রেফারেন্স এ আপনার নাম ও এরিয়া লিখে দিবেন",
        image: rocketQR,
    },
];

export default paymentOptions