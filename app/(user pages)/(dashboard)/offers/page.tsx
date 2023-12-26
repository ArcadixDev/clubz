import { Metadata } from 'next';
import React from 'react'

type Props = {}

export const offersPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Offers",
    template: "%s | Clubz - Offers",
  },
  description:
    "Discover exclusive offers on Clubz. Explore discounts, promotions, and special deals from your favorite venues.",
  openGraph: {
    title: "Clubz - Offers",
    description:
      "Find exclusive offers on Clubz. Explore discounts, promotions, and special deals from your favorite venues.",
    url: "https://clubz.tech/offers",
    siteName: "Clubz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/offers-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Offers",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Clubz",
    title: "Clubz - Offers",
    description:
      "Discover exclusive offers on Clubz. Explore discounts, promotions, and special deals from your favorite venues.",
    images: [
      {
        url: "https://clubz.tech/offers-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Offers",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};


const Offerspage = (props: Props) => {
  return (
    <div>Offerspage</div>
  )
}

export default Offerspage