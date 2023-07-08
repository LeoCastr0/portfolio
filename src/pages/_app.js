import '@/styles/globals.css'
import { useState } from "react";
import {IntlProvider} from 'react-intl'
import messagesEn from "../translations/en.json";
import messagesPt from "../translations/pt.json";

export default function App({ Component, pageProps }) {

    const messages = {
        en: messagesEn,
        pt: messagesPt
    };

    return (
      <IntlProvider key={pageProps.locale} locale={pageProps.locale} messages={messages[pageProps.locale]} defaultLocale="en">
        <Component {...pageProps} />
      </IntlProvider>

  )
}
