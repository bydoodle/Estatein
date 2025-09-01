import { Link } from 'react-router-dom'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Checkbox } from '@headlessui/react'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import * as Slider from '@radix-ui/react-slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import { ArrowRightIcon, ArrowLeftIcon, MapPinIcon, ChevronDownIcon, HomeModernIcon, MagnifyingGlassIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { CheckIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'

export default function Properties() {
    const [properties, setProperties] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const minPrice = 100000;
    const maxPrice = 10000000;
    const [propertyPrice, setPropertyPrice] = useState([minPrice, maxPrice]);
    const minPropertySize = 500;
    const maxPropertySize = 10000;
    const [propertySize, setPropertySize] = useState([minPropertySize, maxPropertySize]);
    const minYear = 1900;
    const maxYear = 2025;
    const [propertyYear, setPropertyYear] = useState([minYear, maxYear]);
    const [dragging, setDragging] = useState(false);

    const [searchInput, setSearchInput] = useState('');
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
    }, []);

    const uniqueLocations = Array.from(new Map(properties.map(p => [`${p.city},${p.state}`, p])).values());
    const uniqueTypes = Array.from(new Map(properties.map(p => [p.type, p])).values());
    const uniqueBedrooms = Array.from(new Map(properties.map(p => [p.bedrooms, p])).values()).sort((a, b) => a.bedrooms - b.bedrooms);
    const uniqueBathrooms = Array.from(new Map(properties.map(p => [p.bathrooms, p])).values()).sort((a, b) => a.bathrooms - b.bathrooms);

    const [selectedFormLocation, setSelectedFormLocation] = useState(uniqueLocations[0]);
    const [query, setQuery] = useState('')

    const filteredLocation =
    query === ''
      ? uniqueLocations
      : uniqueLocations.filter((location) => 
          `${location.city}, ${location.state}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )

    const [selectedFormType, setSelectedFormType] = useState(uniqueTypes[0]);

    const filteredTypes =
    query === ''
        ? uniqueTypes
        : uniqueTypes.filter((type) => 
            type.type.toLowerCase()
            .includes(query.toLowerCase())
        )

    const [selectedFormBedrooms, setSelectedFormBedrooms] = useState(uniqueBedrooms[0]);

    const filteredBedrooms =
    query === ''
        ? uniqueBedrooms
        : uniqueBedrooms.filter((bedrooms) =>
            bedrooms.bedrooms === +query
        )

    const [selectedFormBathrooms, setSelectedFormBathrooms] = useState(uniqueBathrooms[0]);

    const filteredBathrooms =
    query === ''
        ? uniqueBathrooms
        : uniqueBathrooms.filter((bathrooms) =>
            bathrooms.bathrooms === +query
        )
    
    const [selectedFormBudget, setSelectedFormBudget] = useState(null)

    const budgetOptions = [
        'Under $200K',
        '$200K–$300K',
        '$300K–$400K',
        '$400K–$500K',
        '$500K–$700K',
        '$700K+',
    ];

    const filteredBudget =
    query === ''
        ? budgetOptions
        : budgetOptions.filter((budget) =>
            budget.toLowerCase()
            .includes(query.toLowerCase())
        )

    const [formAgreeCheckbox, setFormAgreeCheckbox] = useState(false);

    const handleSubmit = (e) => {
        
    }

    const filteredProperties = properties.filter((property) => {
        const isMatchesLocation = !selectedLocation ||
            (property.state === selectedLocation.state &&
            property.city === selectedLocation.city);

        const isMatchesTypes = !selectedTypes.length || selectedTypes.includes(property.type);
        const isMatchesPrice = property.price > propertyPrice[0] && property.price < propertyPrice[1];
        const isMatchesSize = property.area > propertySize[0] && property.area < propertySize[1];
        const isMatchesYear = property.build_year > propertyYear[0] && property.build_year < propertyYear[1];
        const isMatchesName = !selectedProperty || property.name.toLowerCase().includes(selectedProperty.toLowerCase());

        return isMatchesLocation && isMatchesTypes && isMatchesPrice && isMatchesSize && isMatchesYear && isMatchesName;
    });

    return (
        <>
        <div className="page-wrapper">
            <section className='bg-linear-120 from-[#262626] to-40% to-gr08 mt-[100px] pt-[150px] pb-40 pl-[162px] pr-100 flex flex-col gap-20 relative border-b border-gr15'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Find Your Dream Property</h3>
                    <p className='default-text text-gr60 w-[1366px]'>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey</p>
                </div>
            </section>
            <div className="relative mx-[162px] flex flex-col items-center -translate-y-[46px]">
                <div className="w-[80%] flex justify-between p-5 pl-6 bg-gr08 rounded-t-[10px] border border-gr15 outline-8 outline-gr10">
                    <input type='text'
                        aria-label="Search for a property"
                        placeholder="Search For A Property"
                        onChange={(e) => setSearchInput(e.target.value)}
                        className='focus:outline-none text-2xl w-full rounded-[8px] focus:border-gr15 placeholder-gr40'
                    />
                    <button className='px-5 py-[14px] flex gap-[6px] small-text text-white bg-pr60 rounded-[8px] whitespace-nowrap cursor-pointer'
                    onClick={() => setSelectedProperty(searchInput)}>
                        <MagnifyingGlassIcon  className='flex-shrink-0 size-6' />
                        Find Property
                    </button>
                </div>
                <div className="w-full grid grid-cols-5 justify-between rounded-[12px] bg-gr10 p-[10px] gap-5">
                    <Listbox value={selectedLocation} onChange={setSelectedLocation}>
                        <ListboxButton
                        className=
                            'relative flex items-center justify-between rounded-[12px] bg-gr08 p-5 border border-gr15 focus:outline-none'
                        >
                            <div className='flex items-center gap-[10px] text-gr60 w-full overflow-hidden'>
                                <MapPinIcon className='size-6 flex-shrink-0' />
                                <div className='w-[1px] h-6 bg-gr15'></div>
                                <span className='default-text text-left overflow-hidden whitespace-nowrap text-ellipsis'>{selectedLocation ? selectedLocation.city + ', ' + selectedLocation.state : 'Location'}</span>
                            </div>
                        <ChevronDownIcon
                            className="group pointer-events-none size-8 p-1 bg-gr10 rounded-full fill-white flex-shrink-0"
                            aria-hidden="true"
                        />
                        </ListboxButton>
                        <ListboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            'w-(--button-width) rounded-[12px] border border-gr15 bg-gr08 p-1 [--anchor-gap:--spacing(1)] focus:outline-none !max-h-[205px]',
                            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                        )}
                        >
                        {uniqueLocations
                            .sort((a, b) => a.state.localeCompare(b.state))
                            .map((property) => (
                            <ListboxOption
                            key={property.id}
                            value={property}
                            className="group flex cursor-default items-center gap-2 rounded-lg pl-4 pr-3 py-1.5 select-none data-focus:bg-gr10"
                            >
                            <CheckIcon className="invisible size-6 fill-gr60 group-data-selected:visible" />
                            <div className="text-white default-text pl-[12px]">{property.city}, {property.state}</div>
                            </ListboxOption>
                        ))}
                        </ListboxOptions>
                    </Listbox>
                    <Listbox value={selectedTypes} onChange={setSelectedTypes} multiple>
                        <ListboxButton
                        className=
                            'relative flex items-center justify-between rounded-[12px] bg-gr08 p-5 border border-gr15 focus:outline-none'
                        >
                            <div className='flex items-center gap-[10px] text-gr60 w-full overflow-hidden'>
                                <HomeModernIcon className='size-6 flex-shrink-0' />
                                <div className='w-[1px] h-6 bg-gr15'></div>
                                <span className='default-text text-left overflow-hidden whitespace-nowrap text-ellipsis'>{selectedTypes.length ? selectedTypes.map((type) => type).join(', ') : 'Property Types'}</span>
                            </div>
                        <ChevronDownIcon
                            className="group pointer-events-none size-8 p-1 bg-gr10 rounded-full fill-white"
                            aria-hidden="true"
                        />
                        </ListboxButton>
                        <ListboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            'w-(--button-width) rounded-[12px] border border-gr15 bg-gr08 p-1 [--anchor-gap:--spacing(1)] focus:outline-none !max-h-[205px]',
                            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                        )}>
                            {uniqueTypes
                                .sort((a, b) => a.type.localeCompare(b.type))
                                .map((property) => (
                                <ListboxOption
                                key={property.id}
                                value={property.type}
                                className="group flex cursor-default items-center gap-2 rounded-lg pl-4 pr-3 py-1.5 select-none data-focus:bg-gr10"
                                >
                                <CheckIcon className="invisible size-6 fill-gr60 group-data-selected:visible" />
                                <div className="text-white default-text pl-[12px]">{property.type}</div>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                    <div className='relative w-full flex flex-col gap-2 items-center justify-center rounded-[12px] px-5 text-gr60'>
                        <p>Price Range</p>
                        <Slider.Root
                        className="relative w-full flex items-center touch-none select-none"
                        value={propertyPrice} min={minPrice} max={maxPrice} step={100000} minStepsBetweenThumbs={1}
                        onValueChange={(val) => setPropertyPrice(val)}
                        >
                            <Slider.Track className="relative w-full h-1 bg-gr08 rounded-full">
                                <Slider.Range className="absolute h-full bg-gr15 rounded-full" />
                            </Slider.Track>
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MinPrice" />
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MaxPrice" />
                        </Slider.Root>
                        <div className='flex w-full justify-between small-text text-gr40'>
                            <p>${propertyPrice[0].toLocaleString()}</p>
                            <p>${propertyPrice[1].toLocaleString()}</p>
                        </div>
                    </div>
                    <div className='relative w-full flex flex-col gap-2 items-center justify-center rounded-[12px] px-5 text-gr60'>
                        <p>Property size</p>
                        <Slider.Root
                        className="relative w-full flex items-center touch-none select-none"
                        value={propertySize} min={minPropertySize} max={maxPropertySize} step={100} minStepsBetweenThumbs={1}
                        onValueChange={(val) => setPropertySize(val)}
                        >
                            <Slider.Track className="relative w-full h-1 bg-gr08 rounded-full">
                                <Slider.Range className="absolute h-full bg-gr15 rounded-full" />
                            </Slider.Track>
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MinSize" />
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MaxSize" />
                        </Slider.Root>
                        <div className='flex w-full justify-between small-text text-gr40'>
                            <p>{propertySize[0].toLocaleString()} sq ft</p>
                            <p>{propertySize[1].toLocaleString()} sq ft</p>
                        </div>
                    </div>
                    <div className='relative w-full flex flex-col gap-2 items-center justify-center rounded-[12px] px-5 text-gr60'>
                        <p>Build year</p>
                        <Slider.Root
                        className="relative w-full flex items-center touch-none select-none"
                        value={propertyYear} min={minYear} max={maxYear} step={1} minStepsBetweenThumbs={1}
                        onValueChange={(val => setPropertyYear(val))}
                        >
                            <Slider.Track className="relative w-full h-1 bg-gr08 rounded-full">
                                <Slider.Range className="absolute h-full bg-gr15 rounded-full" />
                            </Slider.Track>
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MinYear" />
                            <Slider.Thumb
                            onPointerDown={() => setDragging(true)}
                            onPointerUp={() => setDragging(false)}
                            className={`block size-5 rounded-full cursor-grab bg-gr08 border border-gr15 focus:border-gr20 focus:outline-none ${dragging ? 'cursor-grabbing' : ''}`}
                            aria-label="MaxYear" />
                        </Slider.Root>
                        <div className='flex w-full justify-between small-text text-gr40'>
                            <p>{propertyYear[0]}</p>
                            <p>{propertyYear[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-[114px] flex flex-col gap-20 relative stars-before-header'>
                <div className='flex justify-between gap-50'>
                    <div className='flex flex-col gap-[14px]'>
                        <h2>Featured Properties</h2>
                        <p className='default-text text-gr60'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>
                    <Link className='link-gr whitespace-nowrap h-min self-end'>
                        View All Properties
                    </Link>
                </div>
                <Swiper
                    navigation={{
                        nextEl: '.properties-swiper-next',
                        prevEl: '.properties-swiper-prev',
                    }}
                    pagination={{
                        el: '.properties-pagination',
                        type: 'fraction',
                        formatFractionCurrent: number => number < 10 ? `0${number}` : number,
                        formatFractionTotal: number => number < 10 ? `0${number}` : number,
                        renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} text-white"></span> of <span class="${totalClass}"></span>`,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    allowTouchMove={false}
                >
                    {filteredProperties.length > 0 ? (filteredProperties.map((property) => (
                        <SwiperSlide
                            key={property.id}
                        >
                            <img src={property.images[0]} alt={property.name} className='rounded-[10px] h-[318px] object-cover' />
                            <article className='flex flex-col gap-[6px]'>
                                <div className='flex flex-col gap-4'>
                                    <p className='small-text text-white px-3 py-[6px] rounded-full bg-gr10 border border-gr15 w-fit'>{property.slogan}</p>
                                    <h5>{property.name}</h5>
                                </div>
                                <p className='default-text text-gr60'>
                                    {property.description.length > 92 ? (
                                    <>
                                        {property.description.substring(0, 92)}...{' '}
                                        <Link
                                            to={'/'}
                                            className='default-text text-white underline w-[240px]'
                                        >Read more
                                        </Link>
                                    </>
                                    ) : property.description}
                                </p>
                            </article>
                            <div className='flex gap-[10px]'>
                                <p className='tag-pill'><img src="/icons/bedroom.svg" alt="" className='size-5' />{property.bedrooms}-Bedroom</p>
                                <p className='tag-pill'><img src="/icons/bathroom.svg" alt="" className='size-5' />{property.bathrooms}-Bathroom</p>
                                <p className='tag-pill'><BuildingOfficeIcon className='size-5' />{property.type}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col h-min gap-[2px] self-end'>
                                    <p className='default-text text-gr60'>Price</p>
                                    <h5>${property.price.toLocaleString()}</h5>
                                </div>
                                <Link
                                    to={`/property/${property.id}`}
                                    className='link-pr default-text w-[240px]'
                                >View Property Details
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))) : (
                        <div className="flex items-center justify-center inset-0 h-80">
                            <p className="text-gr60 text-xl">No properties found</p>
                        </div>
                    )}
                    <div className="nav-wrapper flex justify-between">
                        <div className="properties-pagination !text-gr60" />
                        <div className='flex justify-between gap-[10px]'>
                            <button className="properties-swiper-prev swiper-button"><ArrowLeftIcon /></button>
                            <button className="properties-swiper-next swiper-button"><ArrowRightIcon /></button>
                        </div>
                    </div>
                </Swiper>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px] w-7xl'>
                    <h2>Let's Make it Happen</h2>
                    <p className='default-text text-gr60'>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
                </div>
                <form action="" className='grid grid-cols-4 gap-[50px] p-25 border border-gr15 rounded-[12px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>First Name</p>
                        <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter First Name' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Last Name</p>
                        <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter Last Name' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Email</p>
                        <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter your Email' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Phone</p>
                        <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter Phone Number' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Preferred Location</p>
                        <Combobox value={selectedFormLocation ?? null} onChange={setSelectedFormLocation} onClose={() => setQuery('')}>
                            <div className='relative'>
                                <ComboboxInput
                                    aria-label="Preferred Location"
                                    placeholder="Select Location"
                                    displayValue={(location) => location ? location.city + ', ' + location.state : ''}
                                    onChange={(event) => setQuery(event.target.value)}
                                    className='focus:outline-none default-text w-full px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15'
                                />
                                <ComboboxButton className='absolute top-[50%] -translate-y-[50%] right-6'>
                                    <ChevronDownIcon className="size-6 fill-white group-data-hover:fill-white" />
                                </ComboboxButton>
                            </div>
                            <ComboboxOptions anchor="bottom" className="border border-gr15 bg-gr10 empty:invisible w-(--input-width) rounded-[8px] p-1 gap-1 mt-1 !max-h-[185px] default-text">
                                {filteredLocation.map((location) => (
                                <ComboboxOption key={`${location.city}-${location.state}`} value={location} className="data-focus:bg-gr20 p-1 pl-4 rounded-[4px]">
                                    {location.city}, {location.state}
                                </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Combobox>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Property Type</p>
                        <Combobox value={selectedFormType ?? []} onChange={setSelectedFormType} onClose={() => setQuery('')}>
                            <div className='relative'>
                                <ComboboxInput
                                    aria-label="Property Type"
                                    placeholder="Select Property Type"
                                    displayValue={(type) => type?.type}
                                    onChange={(event) => setQuery(event.target.value)}
                                    className='focus:outline-none default-text w-full px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15'
                                />
                                <ComboboxButton className='absolute top-[50%] -translate-y-[50%] right-6'>
                                    <ChevronDownIcon className="size-6 fill-white group-data-hover:fill-white" />
                                </ComboboxButton>
                            </div>
                            <ComboboxOptions anchor="bottom" className="border border-gr15 bg-gr10 empty:invisible w-(--input-width) rounded-[8px] p-1 gap-1 mt-1 !max-h-[185px] default-text">
                                {filteredTypes.map((type) => (
                                <ComboboxOption key={type.type} value={type} className="data-focus:bg-gr20 p-1 pl-4 rounded-[4px]">
                                    {type.type}
                                </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Combobox>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>No. of Bedrooms</p>
                        <Combobox value={selectedFormBedrooms ?? []} onChange={setSelectedFormBedrooms} onClose={() => setQuery('')}>
                            <div className='relative'>
                                <ComboboxInput
                                    aria-label="Bedrooms"
                                    placeholder="Select no. of Bedrooms"
                                    displayValue={(bedrooms) => bedrooms?.bedrooms}
                                    onChange={(event) => setQuery(event.target.value)}
                                    className='focus:outline-none default-text w-full px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15'
                                />
                                <ComboboxButton className='absolute top-[50%] -translate-y-[50%] right-6'>
                                    <ChevronDownIcon className="size-6 fill-white group-data-hover:fill-white" />
                                </ComboboxButton>
                            </div>
                            <ComboboxOptions anchor="bottom" className="border border-gr15 bg-gr10 empty:invisible w-(--input-width) rounded-[8px] p-1 gap-1 mt-1 !max-h-[185px] default-text">
                                {filteredBedrooms.map((bedrooms) => (
                                <ComboboxOption key={bedrooms.bedrooms} value={bedrooms} className="data-focus:bg-gr20 p-1 pl-4 rounded-[4px]">
                                    {bedrooms.bedrooms}
                                </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Combobox>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>No. of Bathrooms</p>
                        <Combobox value={selectedFormBathrooms ?? []} onChange={setSelectedFormBathrooms} onClose={() => setQuery('')}>
                            <div className='relative'>
                                <ComboboxInput
                                    aria-label="Bathrooms"
                                    placeholder="Select no. of Bathrooms"
                                    displayValue={(bathrooms) => bathrooms?.bathrooms}
                                    onChange={(event) => setQuery(event.target.value)}
                                    className='focus:outline-none default-text w-full px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15'
                                />
                                <ComboboxButton className='absolute top-[50%] -translate-y-[50%] right-6'>
                                    <ChevronDownIcon className="size-6 fill-white group-data-hover:fill-white" />
                                </ComboboxButton>
                            </div>
                            <ComboboxOptions anchor="bottom" className="border border-gr15 bg-gr10 empty:invisible w-(--input-width) rounded-[8px] p-1 gap-1 mt-1 !max-h-[185px] default-text">
                                {filteredBathrooms.map((bathrooms) => (
                                <ComboboxOption key={bathrooms.bathrooms} value={bathrooms} className="data-focus:bg-gr20 p-1 pl-4 rounded-[4px]">
                                    {bathrooms.bathrooms}
                                </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Combobox>
                    </div>
                    <div className='flex flex-col gap-4 col-span-2'>
                        <p className='default-text text-white'>Budget</p>
                        <Combobox value={selectedFormBudget ?? null} onChange={setSelectedFormBudget} onClose={() => setQuery('')}>
                            <div className='relative'>
                                <ComboboxInput
                                    aria-label="Budget"
                                    placeholder="Select Budget"
                                    displayValue={(budget) => budget}
                                    onChange={(event) => setQuery(event.target.value)}
                                    className='focus:outline-none default-text w-full px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15'
                                />
                                <ComboboxButton className='absolute top-[50%] -translate-y-[50%] right-6'>
                                    <ChevronDownIcon className="size-6 fill-white group-data-hover:fill-white" />
                                </ComboboxButton>
                            </div>
                            <ComboboxOptions anchor="bottom" className="border border-gr15 bg-gr10 empty:invisible w-(--input-width) rounded-[8px] p-1 gap-1 mt-1 !max-h-[185px] default-text">
                                {filteredBudget.map((budget, idx) => (
                                <ComboboxOption key={idx} value={budget} className="data-focus:bg-gr20 p-1 pl-4 rounded-[4px]">
                                    {budget}
                                </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        </Combobox>
                    </div>
                    <div className='flex flex-col gap-4 col-span-2'>
                        <p className='default-text text-white'>Preferred Contact Method</p>
                        <div className='flex justify-between gap-4'>
                            <div className='relative flex gap-[12px] items-center px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 w-full'>
                                <PhoneIcon className='fill-white size-6' />
                                <input type="tel" className='focus:outline-none default-text w-min' placeholder='Enter Your Number' />
                                <input type="radio" name='preferred-contact' value='phone' id='preferred-phone' className='sr-only peer' />
                                <label htmlFor='preferred-phone' className="absolute right-5 size-4 rounded-full border border-pr60 bg-transparent peer-checked:bg-pr60 peer-checked:border-pr80"></label>
                            </div>
                            <div className='relative flex gap-[12px] items-center px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 w-full'>
                                <EnvelopeIcon className='fill-white size-6' />
                                <input type="email" className='focus:outline-none default-text w-min' placeholder='Enter Your Email' />
                                <input type="radio" name='preferred-contact' value='email' id='preferred-email' className='sr-only peer' />
                                <label htmlFor='preferred-email' className="absolute right-5 size-4 rounded-full border border-pr60 bg-transparent peer-checked:bg-pr60 peer-checked:border-pr80"></label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 col-span-4'>
                        <p className='default-text text-white'>Message</p>
                        <textarea className='border resize-none h-[170px] pt-5 pb-6 default-text border-gr15 focus:outline-none rounded-[8px] bg-gr10 px-5 py-6' placeholder='Enter your Message here..' />
                    </div>
                    <div className='flex justify-between col-span-4'>
                        <div className='flex items-center gap-[50px]'>
                            <Checkbox
                            checked={formAgreeCheckbox}
                            onChange={setFormAgreeCheckbox}
                            className='group p-1 size-7 focus:not-data-focus:outline-none data-focus:outline-none bg-gr10 border border-gr15 rounded-[4px]'
                            >
                                <CheckIcon className='hidden group-data-checked:block' />
                            </Checkbox>
                            <p className='default-text text-gr60'>I agree with <Link className='cursor-pointer underline'>Terms of Use</Link> and <Link className='cursor-pointer underline'>Privacy Policy</Link></p>
                        </div>
                        <button type='submit' className='bg-pr60 px-[46px] py-[18px] rounded-[8px]'>Send Your Message</button>
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}