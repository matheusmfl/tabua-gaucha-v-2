'use client'

import Image from "next/image"
import { Container } from "./Container"
import logo from '../../public/logo.svg'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

export function Header() {
  return (
    <header className="px-[120px] pt-12 bg-neutral-800 w-full pb-4 flex justify-center">
      <Container>
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Logomarca" />
          <nav>
            <NavigationMenu>
              <NavigationMenuList className="text-neutral-100 data-[state=open]:text-yellow-500/80">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Sobre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className="bg-red-500 w-[300px]">
                        Link 1
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Nossa loja</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full bg-red-400">
                    <NavigationMenuLink>Link 2</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={'hover:text-neutral-200  focus:text-neutral-200'}>Contato</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full bg-red-400">
                    <NavigationMenuLink>Link 3</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>


            </NavigationMenu>
          </nav>

          <div className="flex gap-2 items-center justify-center">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1052_161)">
                <path d="M25.0929 8.4731C24.1089 7.49109 22.7759 6.93894 21.3857 6.93754C19.9955 6.93613 18.6614 7.48558 17.6754 8.4656L16.3179 9.72935L14.9604 8.4656C13.9752 7.48161 12.6394 6.9293 11.247 6.93018C9.8545 6.93106 8.51942 7.48505 7.53542 8.47029C6.55143 9.45553 5.99912 10.7913 6 12.1838C6.00088 13.5762 6.55487 14.9113 7.54011 15.8953L15.9176 24.3947C15.9699 24.4477 16.0323 24.4898 16.101 24.5185C16.1697 24.5472 16.2434 24.562 16.3179 24.562C16.3924 24.562 16.4661 24.5472 16.5349 24.5185C16.6036 24.4898 16.6659 24.4477 16.7182 24.3947L25.0929 15.899C25.5806 15.4115 25.9675 14.8327 26.2315 14.1956C26.4954 13.5585 26.6313 12.8757 26.6313 12.1861C26.6313 11.4965 26.4954 10.8136 26.2315 10.1766C25.9675 9.53947 25.5806 8.96063 25.0929 8.4731ZM24.2942 15.1059L16.3179 23.1984L8.33886 15.1031C7.56978 14.3286 7.13898 13.2809 7.14085 12.1895C7.14271 11.098 7.57707 10.0517 8.34879 9.2799C9.12051 8.50806 10.1667 8.07353 11.2581 8.07149C12.3496 8.06945 13.3974 8.50008 14.172 9.26904C14.1765 9.2739 14.1816 9.2783 14.187 9.28216L15.9345 10.9097C16.0386 11.0067 16.1756 11.0606 16.3179 11.0606C16.4602 11.0606 16.5972 11.0067 16.7014 10.9097L18.4489 9.28123C18.4543 9.27736 18.4593 9.27296 18.4639 9.2681C18.8466 8.88306 19.3016 8.57736 19.8028 8.36855C20.304 8.15974 20.8414 8.05191 21.3844 8.05126C21.9273 8.05061 22.465 8.15714 22.9667 8.36475C23.4683 8.57236 23.9241 8.87696 24.3078 9.26108C24.6915 9.64521 24.9955 10.1013 25.2026 10.6032C25.4096 11.1051 25.5156 11.6429 25.5143 12.1859C25.513 12.7288 25.4046 13.2661 25.1952 13.767C24.9859 14.268 24.6796 14.7226 24.2942 15.105V15.1059Z" fill="#F5F5F5" />
              </g>
              <defs>
                <clipPath id="clip0_1052_161">
                  <rect width="24" height="24" fill="white" transform="translate(4.3999 4)" />
                </clipPath>
              </defs>
            </svg>

            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1052_161)">
                <path d="M25.0929 8.4731C24.1089 7.49109 22.7759 6.93894 21.3857 6.93754C19.9955 6.93613 18.6614 7.48558 17.6754 8.4656L16.3179 9.72935L14.9604 8.4656C13.9752 7.48161 12.6394 6.9293 11.247 6.93018C9.8545 6.93106 8.51942 7.48505 7.53542 8.47029C6.55143 9.45553 5.99912 10.7913 6 12.1838C6.00088 13.5762 6.55487 14.9113 7.54011 15.8953L15.9176 24.3947C15.9699 24.4477 16.0323 24.4898 16.101 24.5185C16.1697 24.5472 16.2434 24.562 16.3179 24.562C16.3924 24.562 16.4661 24.5472 16.5349 24.5185C16.6036 24.4898 16.6659 24.4477 16.7182 24.3947L25.0929 15.899C25.5806 15.4115 25.9675 14.8327 26.2315 14.1956C26.4954 13.5585 26.6313 12.8757 26.6313 12.1861C26.6313 11.4965 26.4954 10.8136 26.2315 10.1766C25.9675 9.53947 25.5806 8.96063 25.0929 8.4731ZM24.2942 15.1059L16.3179 23.1984L8.33886 15.1031C7.56978 14.3286 7.13898 13.2809 7.14085 12.1895C7.14271 11.098 7.57707 10.0517 8.34879 9.2799C9.12051 8.50806 10.1667 8.07353 11.2581 8.07149C12.3496 8.06945 13.3974 8.50008 14.172 9.26904C14.1765 9.2739 14.1816 9.2783 14.187 9.28216L15.9345 10.9097C16.0386 11.0067 16.1756 11.0606 16.3179 11.0606C16.4602 11.0606 16.5972 11.0067 16.7014 10.9097L18.4489 9.28123C18.4543 9.27736 18.4593 9.27296 18.4639 9.2681C18.8466 8.88306 19.3016 8.57736 19.8028 8.36855C20.304 8.15974 20.8414 8.05191 21.3844 8.05126C21.9273 8.05061 22.465 8.15714 22.9667 8.36475C23.4683 8.57236 23.9241 8.87696 24.3078 9.26108C24.6915 9.64521 24.9955 10.1013 25.2026 10.6032C25.4096 11.1051 25.5156 11.6429 25.5143 12.1859C25.513 12.7288 25.4046 13.2661 25.1952 13.767C24.9859 14.268 24.6796 14.7226 24.2942 15.105V15.1059Z" fill="#F5F5F5" />
              </g>
              <defs>
                <clipPath id="clip0_1052_161">
                  <rect width="24" height="24" fill="white" transform="translate(4.3999 4)" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </div>

      </Container>
    </header>
  )
}