import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function Header() {
  return (
  <>
    <Navbar className="bg-red-600">
      <NavbarBrand>
        <p className="font-bold text-inherit">Sandesh</p>
      </NavbarBrand>
      <NavbarContent className="flex items-center" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Gujarat
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            T20 WORLD CUP
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            INDIA
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            WORLD
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            ENTERTAINMENT
          </Link>
        </NavbarItem>
        <NavbarItem>
            
        </NavbarItem>
        <NavbarItem>
        <div className="flex items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="bordered"
                        className="border-0 focus:ring-0 focus:ring-offset-0 focus:outline-none text-white font-bold text-lg"
                      >
                        Welcome
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="new"
                        className="w-full bg-transparent text-center"
                      >
                        <Button
                          className="bg-transparent hover:bg-transparent"
                          
                        >
                          Logout
                        </Button>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SPORTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            LIFESTYLe
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            LIFESTYLe
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="ml-auto">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  </>
  );
}
