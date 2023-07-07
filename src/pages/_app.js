import '@/styles/globals.css'
import { useState } from "react";
import {IntlProvider} from 'react-intl'
import messagesEn from "../translations/eng.json";
import messagesPt from "../translations/pt.json";

export default function App({ Component, pageProps }) {
    const [locale, setLocale] = useState('en');

    const messages = {
        en: messagesEn,
        pt: messagesPt
    };

    return (
      <IntlProvider key={locale} locale={locale} messages={messages[locale]} defaultLocale="en">
        <Component {...pageProps} />
      </IntlProvider>

  )
}
