import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Cat 1', href: '#', current: false },
  { name: 'Cat 2', href: '#', current: false },
  { name: 'Cat 3', href: '#', current: false },
  { name: 'Cat 4', href: '#', current: false },
  { name: 'Cat 5', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-slate-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-500 hover:bg-blue-500 hover:text-white', // Corrected hover color here
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-14 flex items-center md:ml-6">
                      {/* Contact Us button */}
                      <a
                        href="#contact"
                        className="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium" // Corrected hover color here
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-blue-500 hover:text-white', // Corrected hover color here
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {/* Contact Us button for mobile */}
                  <a
                    href="#contact"
                    className="text-gray-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-base font-medium block" // Corrected hover color here
                  >
                    Contact Us
                  </a>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div id="contact" className="mx-auto max-w-7xl  sm:px-6 lg:px-8" >
            {/* Your contact us content goes here */}
          </div>
        </main>
      </div>
    </>
  )
}
