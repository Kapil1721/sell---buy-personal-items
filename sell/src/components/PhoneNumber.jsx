import { MobileIcon } from "./Icons"
import { useState } from 'react';
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css'




export function PhoneNumber({ value, onchange }) {
    const [countryCode, setCountryCode] = useState('1');
    const [country, setCountry] = useState('us');

    return (
        <div className='relative flex'>
            <div className='flex justify-start items-center gap-3 py-3 w-full lg:px-14 pl-12 pr-2  border border-[#D5E3EE] rounded'>
                {/* <PhoneCode phone={phone} setPhone={setPhone} /> */}
                <CountrySelector
                    buttonStyle={{ border: "none" }}
                    selectedCountry={country}
                    onSelect={(country) => {
                        setCountryCode(country.dialCode);
                        setCountry(country.iso2);
                        onchange(`${country.dialCode}-${value}`)
                    }}
                />
                <span className="text-primary font-medium">+{countryCode}</span>
                <input name='contactNumber' value={value} onChange={(e) => {
                    if (e.target.value.length <= 15) {
                        onchange(`${countryCode}-${e.target.value}`)
                    }
                }} className='w-full rounded focus:outline-none placeholder:text-[#374b5c] text-sm lg:text-base font-medium' type="tel" placeholder="Phone" />
            </div>
            <span className='absolute top-[16px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                <MobileIcon color={"#475B6B"} />
            </span>
        </div>
    )
}

export default PhoneNumber