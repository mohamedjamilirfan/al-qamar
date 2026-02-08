import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Check } from 'lucide-react';

export const countries = [
  { code: 'AF', name: 'Afghanistan', dial_code: '+93', flag: '🇦🇫' },
  { code: 'AL', name: 'Albania', dial_code: '+355', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', dial_code: '+213', flag: '🇩🇿' },
  { code: 'AD', name: 'Andorra', dial_code: '+376', flag: '🇦🇩' },
  { code: 'AO', name: 'Angola', dial_code: '+244', flag: '🇦🇴' },
  { code: 'AG', name: 'Antigua and Barbuda', dial_code: '+1-268', flag: '🇦🇬' },
  { code: 'AR', name: 'Argentina', dial_code: '+54', flag: '🇦🇷' },
  { code: 'AM', name: 'Armenia', dial_code: '+374', flag: '🇦🇲' },
  { code: 'AU', name: 'Australia', dial_code: '+61', flag: '🇦🇺' },
  { code: 'AT', name: 'Austria', dial_code: '+43', flag: '🇦🇹' },
  { code: 'AZ', name: 'Azerbaijan', dial_code: '+994', flag: '🇦🇿' },
  { code: 'BS', name: 'Bahamas', dial_code: '+1-242', flag: '🇧🇸' },
  { code: 'BH', name: 'Bahrain', dial_code: '+973', flag: '🇧🇭' },
  { code: 'BD', name: 'Bangladesh', dial_code: '+880', flag: '🇧🇩' },
  { code: 'BB', name: 'Barbados', dial_code: '+1-246', flag: '🇧🇧' },
  { code: 'BY', name: 'Belarus', dial_code: '+375', flag: '🇧🇾' },
  { code: 'BE', name: 'Belgium', dial_code: '+32', flag: '🇧🇪' },
  { code: 'BZ', name: 'Belize', dial_code: '+501', flag: '🇧🇿' },
  { code: 'BJ', name: 'Benin', dial_code: '+229', flag: '🇧🇯' },
  { code: 'BT', name: 'Bhutan', dial_code: '+975', flag: '🇧🇹' },
  { code: 'BO', name: 'Bolivia', dial_code: '+591', flag: '🇧🇴' },
  { code: 'BA', name: 'Bosnia and Herzegovina', dial_code: '+387', flag: '🇧🇦' },
  { code: 'BW', name: 'Botswana', dial_code: '+267', flag: '🇧🇼' },
  { code: 'BR', name: 'Brazil', dial_code: '+55', flag: '🇧🇷' },
  { code: 'BN', name: 'Brunei', dial_code: '+673', flag: '🇧🇳' },
  { code: 'BG', name: 'Bulgaria', dial_code: '+359', flag: '🇧🇬' },
  { code: 'BF', name: 'Burkina Faso', dial_code: '+226', flag: '🇧🇫' },
  { code: 'BI', name: 'Burundi', dial_code: '+257', flag: '🇧🇮' },
  { code: 'CV', name: 'Cabo Verde', dial_code: '+238', flag: '🇨🇻' },
  { code: 'KH', name: 'Cambodia', dial_code: '+855', flag: '🇰🇭' },
  { code: 'CM', name: 'Cameroon', dial_code: '+237', flag: '🇨🇲' },
  { code: 'CA', name: 'Canada', dial_code: '+1', flag: '🇨🇦' },
  {
    code: 'CF',
    name: 'Central African Republic',
    dial_code: '+236',
    flag: '🇨🇫',
  },
  { code: 'TD', name: 'Chad', dial_code: '+235', flag: '🇹🇩' },
  { code: 'CL', name: 'Chile', dial_code: '+56', flag: '🇨🇱' },
  { code: 'CN', name: 'China', dial_code: '+86', flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia', dial_code: '+57', flag: '🇨🇴' },
  { code: 'KM', name: 'Comoros', dial_code: '+269', flag: '🇰🇲' },
  { code: 'CG', name: 'Congo', dial_code: '+242', flag: '🇨🇬' },
  { code: 'CD', name: 'Congo (DRC)', dial_code: '+243', flag: '🇨🇩' },
  { code: 'CR', name: 'Costa Rica', dial_code: '+506', flag: '🇨🇷' },
  { code: 'CI', name: "Côte d'Ivoire", dial_code: '+225', flag: '🇨🇮' },
  { code: 'HR', name: 'Croatia', dial_code: '+385', flag: '🇭🇷' },
  { code: 'CU', name: 'Cuba', dial_code: '+53', flag: '🇨🇺' },
  { code: 'CY', name: 'Cyprus', dial_code: '+357', flag: '🇨🇾' },
  { code: 'CZ', name: 'Czech Republic', dial_code: '+420', flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark', dial_code: '+45', flag: '🇩🇰' },
  { code: 'DJ', name: 'Djibouti', dial_code: '+253', flag: '🇩🇯' },
  { code: 'DM', name: 'Dominica', dial_code: '+1-767', flag: '🇩🇲' },
  { code: 'DO', name: 'Dominican Republic', dial_code: '+1-809', flag: '🇩🇴' },
  { code: 'EC', name: 'Ecuador', dial_code: '+593', flag: '🇪🇨' },
  { code: 'EG', name: 'Egypt', dial_code: '+20', flag: '🇪🇬' },
  { code: 'SV', name: 'El Salvador', dial_code: '+503', flag: '🇸🇻' },
  { code: 'GQ', name: 'Equatorial Guinea', dial_code: '+240', flag: '🇬🇶' },
  { code: 'ER', name: 'Eritrea', dial_code: '+291', flag: '🇪🇷' },
  { code: 'EE', name: 'Estonia', dial_code: '+372', flag: '🇪🇪' },
  { code: 'SZ', name: 'Eswatini', dial_code: '+268', flag: '🇸🇿' },
  { code: 'ET', name: 'Ethiopia', dial_code: '+251', flag: '🇪🇹' },
  { code: 'FJ', name: 'Fiji', dial_code: '+679', flag: '🇫🇯' },
  { code: 'FI', name: 'Finland', dial_code: '+358', flag: '🇫🇮' },
  { code: 'FR', name: 'France', dial_code: '+33', flag: '🇫🇷' },
  { code: 'GA', name: 'Gabon', dial_code: '+241', flag: '🇬🇦' },
  { code: 'GM', name: 'Gambia', dial_code: '+220', flag: '🇬🇲' },
  { code: 'GE', name: 'Georgia', dial_code: '+995', flag: '🇬🇪' },
  { code: 'DE', name: 'Germany', dial_code: '+49', flag: '🇩🇪' },
  { code: 'GH', name: 'Ghana', dial_code: '+233', flag: '🇬🇭' },
  { code: 'GR', name: 'Greece', dial_code: '+30', flag: '🇬🇷' },
  { code: 'GD', name: 'Grenada', dial_code: '+1-473', flag: '🇬🇩' },
  { code: 'GT', name: 'Guatemala', dial_code: '+502', flag: '🇬🇹' },
  { code: 'GN', name: 'Guinea', dial_code: '+224', flag: '🇬🇳' },
  { code: 'GW', name: 'Guinea-Bissau', dial_code: '+245', flag: '🇬🇼' },
  { code: 'GY', name: 'Guyana', dial_code: '+592', flag: '🇬🇾' },
  { code: 'HT', name: 'Haiti', dial_code: '+509', flag: '🇭🇹' },
  { code: 'HN', name: 'Honduras', dial_code: '+504', flag: '🇭🇳' },
  { code: 'HU', name: 'Hungary', dial_code: '+36', flag: '🇭🇺' },
  { code: 'IS', name: 'Iceland', dial_code: '+354', flag: '🇮🇸' },
  { code: 'IN', name: 'India', dial_code: '+91', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia', dial_code: '+62', flag: '🇮🇩' },
  { code: 'IR', name: 'Iran', dial_code: '+98', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', dial_code: '+964', flag: '🇮🇶' },
  { code: 'IE', name: 'Ireland', dial_code: '+353', flag: '🇮🇪' },
  { code: 'IT', name: 'Italy', dial_code: '+39', flag: '🇮🇹' },
  { code: 'JM', name: 'Jamaica', dial_code: '+1-876', flag: '🇯🇲' },
  { code: 'JP', name: 'Japan', dial_code: '+81', flag: '🇯🇵' },
  { code: 'JO', name: 'Jordan', dial_code: '+962', flag: '🇯🇴' },
  { code: 'KZ', name: 'Kazakhstan', dial_code: '+7', flag: '🇰🇿' },
  { code: 'KE', name: 'Kenya', dial_code: '+254', flag: '🇰🇪' },
  { code: 'KI', name: 'Kiribati', dial_code: '+686', flag: '🇰🇮' },
  { code: 'KP', name: 'North Korea', dial_code: '+850', flag: '🇰🇵' },
  { code: 'KR', name: 'South Korea', dial_code: '+82', flag: '🇰🇷' },
  { code: 'KW', name: 'Kuwait', dial_code: '+965', flag: '🇰🇼' },
  { code: 'KG', name: 'Kyrgyzstan', dial_code: '+996', flag: '🇰🇬' },
  { code: 'LA', name: 'Laos', dial_code: '+856', flag: '🇱🇦' },
  { code: 'LV', name: 'Latvia', dial_code: '+371', flag: '🇱🇻' },
  { code: 'LB', name: 'Lebanon', dial_code: '+961', flag: '🇱🇧' },
  { code: 'LS', name: 'Lesotho', dial_code: '+266', flag: '🇱🇸' },
  { code: 'LR', name: 'Liberia', dial_code: '+231', flag: '🇱🇷' },
  { code: 'LY', name: 'Libya', dial_code: '+218', flag: '🇱🇾' },
  { code: 'LI', name: 'Liechtenstein', dial_code: '+423', flag: '🇱🇮' },
  { code: 'LT', name: 'Lithuania', dial_code: '+370', flag: '🇱🇹' },
  { code: 'LU', name: 'Luxembourg', dial_code: '+352', flag: '🇱🇺' },
  { code: 'MG', name: 'Madagascar', dial_code: '+261', flag: '🇲🇬' },
  { code: 'MW', name: 'Malawi', dial_code: '+265', flag: '🇲🇼' },
  { code: 'MY', name: 'Malaysia', dial_code: '+60', flag: '🇲🇾' },
  { code: 'MV', name: 'Maldives', dial_code: '+960', flag: '🇲🇻' },
  { code: 'ML', name: 'Mali', dial_code: '+223', flag: '🇲🇱' },
  { code: 'MT', name: 'Malta', dial_code: '+356', flag: '🇲🇹' },
  { code: 'MH', name: 'Marshall Islands', dial_code: '+692', flag: '🇲🇭' },
  { code: 'MR', name: 'Mauritania', dial_code: '+222', flag: '🇲🇷' },
  { code: 'MU', name: 'Mauritius', dial_code: '+230', flag: '🇲🇺' },
  { code: 'MX', name: 'Mexico', dial_code: '+52', flag: '🇲🇽' },
  { code: 'FM', name: 'Micronesia', dial_code: '+691', flag: '🇫🇲' },
  { code: 'MD', name: 'Moldova', dial_code: '+373', flag: '🇲🇩' },
  { code: 'MC', name: 'Monaco', dial_code: '+377', flag: '🇲🇨' },
  { code: 'MN', name: 'Mongolia', dial_code: '+976', flag: '🇲🇳' },
  { code: 'ME', name: 'Montenegro', dial_code: '+382', flag: '🇲🇪' },
  { code: 'MA', name: 'Morocco', dial_code: '+212', flag: '🇲🇦' },
  { code: 'MZ', name: 'Mozambique', dial_code: '+258', flag: '🇲🇿' },
  { code: 'MM', name: 'Myanmar', dial_code: '+95', flag: '🇲🇲' },
  { code: 'NA', name: 'Namibia', dial_code: '+264', flag: '🇳🇦' },
  { code: 'NR', name: 'Nauru', dial_code: '+674', flag: '🇳🇷' },
  { code: 'NP', name: 'Nepal', dial_code: '+977', flag: '🇳🇵' },
  { code: 'NL', name: 'Netherlands', dial_code: '+31', flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand', dial_code: '+64', flag: '🇳🇿' },
  { code: 'NI', name: 'Nicaragua', dial_code: '+505', flag: '🇳🇮' },
  { code: 'NE', name: 'Niger', dial_code: '+227', flag: '🇳🇪' },
  { code: 'NG', name: 'Nigeria', dial_code: '+234', flag: '🇳🇬' },
  { code: 'MK', name: 'North Macedonia', dial_code: '+389', flag: '🇲🇰' },
  { code: 'NO', name: 'Norway', dial_code: '+47', flag: '🇳🇴' },
  { code: 'OM', name: 'Oman', dial_code: '+968', flag: '🇴🇲' },
  { code: 'PK', name: 'Pakistan', dial_code: '+92', flag: '🇵🇰' },
  { code: 'PW', name: 'Palau', dial_code: '+680', flag: '🇵🇼' },
  { code: 'PS', name: 'Palestine', dial_code: '+970', flag: '🇵🇸' },
  { code: 'PA', name: 'Panama', dial_code: '+507', flag: '🇵🇦' },
  { code: 'PG', name: 'Papua New Guinea', dial_code: '+675', flag: '🇵🇬' },
  { code: 'PY', name: 'Paraguay', dial_code: '+595', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru', dial_code: '+51', flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines', dial_code: '+63', flag: '🇵🇭' },
  { code: 'PL', name: 'Poland', dial_code: '+48', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', dial_code: '+351', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar', dial_code: '+974', flag: '🇶🇦' },
  { code: 'RO', name: 'Romania', dial_code: '+40', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', dial_code: '+7', flag: '🇷🇺' },
  { code: 'RW', name: 'Rwanda', dial_code: '+250', flag: '🇷🇼' },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    dial_code: '+1-869',
    flag: '🇰🇳',
  },
  { code: 'LC', name: 'Saint Lucia', dial_code: '+1-758', flag: '🇱🇨' },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    dial_code: '+1-784',
    flag: '🇻🇨',
  },
  { code: 'WS', name: 'Samoa', dial_code: '+685', flag: '🇼🇸' },
  { code: 'SM', name: 'San Marino', dial_code: '+378', flag: '🇸🇲' },
  { code: 'ST', name: 'Sao Tome and Principe', dial_code: '+239', flag: '🇸🇹' },
  { code: 'SA', name: 'Saudi Arabia', dial_code: '+966', flag: '🇸🇦' },
  { code: 'SN', name: 'Senegal', dial_code: '+221', flag: '🇸🇳' },
  { code: 'RS', name: 'Serbia', dial_code: '+381', flag: '🇷🇸' },
  { code: 'SC', name: 'Seychelles', dial_code: '+248', flag: '🇸🇨' },
  { code: 'SL', name: 'Sierra Leone', dial_code: '+232', flag: '🇸🇱' },
  { code: 'SG', name: 'Singapore', dial_code: '+65', flag: '🇸🇬' },
  { code: 'SK', name: 'Slovakia', dial_code: '+421', flag: '🇸🇰' },
  { code: 'SI', name: 'Slovenia', dial_code: '+386', flag: '🇸🇮' },
  { code: 'SB', name: 'Solomon Islands', dial_code: '+677', flag: '🇸🇧' },
  { code: 'SO', name: 'Somalia', dial_code: '+252', flag: '🇸🇴' },
  { code: 'ZA', name: 'South Africa', dial_code: '+27', flag: '🇿🇦' },
  { code: 'SS', name: 'South Sudan', dial_code: '+211', flag: '🇸🇸' },
  { code: 'ES', name: 'Spain', dial_code: '+34', flag: '🇪🇸' },
  { code: 'LK', name: 'Sri Lanka', dial_code: '+94', flag: '🇱🇰' },
  { code: 'SD', name: 'Sudan', dial_code: '+249', flag: '🇸🇩' },
  { code: 'SR', name: 'Suriname', dial_code: '+597', flag: '🇸🇷' },
  { code: 'SE', name: 'Sweden', dial_code: '+46', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', dial_code: '+41', flag: '🇨🇭' },
  { code: 'SY', name: 'Syria', dial_code: '+963', flag: '🇸🇾' },
  { code: 'TW', name: 'Taiwan', dial_code: '+886', flag: '🇹🇼' },
  { code: 'TJ', name: 'Tajikistan', dial_code: '+992', flag: '🇹🇯' },
  { code: 'TZ', name: 'Tanzania', dial_code: '+255', flag: '🇹🇿' },
  { code: 'TH', name: 'Thailand', dial_code: '+66', flag: '🇹🇭' },
  { code: 'TL', name: 'Timor-Leste', dial_code: '+670', flag: '🇹🇱' },
  { code: 'TG', name: 'Togo', dial_code: '+228', flag: '🇹🇬' },
  { code: 'TO', name: 'Tonga', dial_code: '+676', flag: '🇹🇴' },
  { code: 'TT', name: 'Trinidad and Tobago', dial_code: '+1-868', flag: '🇹🇹' },
  { code: 'TN', name: 'Tunisia', dial_code: '+216', flag: '🇹🇳' },
  { code: 'TR', name: 'Turkey', dial_code: '+90', flag: '🇹🇷' },
  { code: 'TM', name: 'Turkmenistan', dial_code: '+993', flag: '🇹🇲' },
  { code: 'TV', name: 'Tuvalu', dial_code: '+688', flag: '🇹🇻' },
  { code: 'UG', name: 'Uganda', dial_code: '+256', flag: '🇺🇬' },
  { code: 'UA', name: 'Ukraine', dial_code: '+380', flag: '🇺🇦' },
  { code: 'AE', name: 'United Arab Emirates', dial_code: '+971', flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom', dial_code: '+44', flag: '🇬🇧' },
  { code: 'US', name: 'United States', dial_code: '+1', flag: '🇺🇸' },
  { code: 'UY', name: 'Uruguay', dial_code: '+598', flag: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan', dial_code: '+998', flag: '🇺🇿' },
  { code: 'VU', name: 'Vanuatu', dial_code: '+678', flag: '🇻🇺' },
  { code: 'VA', name: 'Vatican City', dial_code: '+379', flag: '🇻🇦' },
  { code: 'VE', name: 'Venezuela', dial_code: '+58', flag: '🇻🇪' },
  { code: 'VN', name: 'Vietnam', dial_code: '+84', flag: '🇻🇳' },
  { code: 'YE', name: 'Yemen', dial_code: '+967', flag: '🇾🇪' },
  { code: 'ZM', name: 'Zambia', dial_code: '+260', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', dial_code: '+263', flag: '🇿🇼' },
];

interface CountryCodeSelectorProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter countries based on search
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.dial_code.includes(search) ||
      country.code.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedCountry =
    countries.find((c) => c.dial_code === value) || countries[187]; // Default to UAE

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer w-full sm:w-[120px] px-3 py-3.5 border border-gray-200 rounded-2xl focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] outline-none transition-colors bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w80/${selectedCountry.code.toLowerCase()}.png 2x`}
            width="24"
            height="16"
            alt={selectedCountry.name}
            className="object-cover rounded-sm border border-gray-100"
          />
          <span className="text-gray-700 font-medium text-sm">
            {selectedCountry.dial_code}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* Search Input */}
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search country or code..."
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#12377d] focus:outline-none focus:ring-1 focus:ring-[#12377d]"
                  autoFocus
                />
              </div>
            </div>

            {/* Country List */}
            <div className="max-h-[240px] overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      // Create a synthetic event that matches React.ChangeEvent
                      onChange({
                        target: {
                          name: 'countryCode',
                          value: country.dial_code,
                        },
                      } as any);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors text-left cursor-pointer">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
                        width="24"
                        height="16"
                        alt={country.name}
                        className="object-cover rounded-sm border border-gray-100"
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {country.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {country.dial_code}
                      </span>
                    </div>
                    {value === country.dial_code && (
                      <Check size={16} className="text-[#12377d]" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryCodeSelector;
