import Link from "next/link";
import Image from "next/image";
// import { SignedIn } from "@clerk/nextjs/app-beta/client";
import { dark } from "@clerk/themes";
import { SignedIn, OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";
function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-centre gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">PostBox</p>
      </Link>
      
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          baseTheme: dark,
          elements: {
            organizationSwitcherTrigger: "py-2 py-4",
          },
        }}
      />
    </nav>
  );
}

export default Topbar;
