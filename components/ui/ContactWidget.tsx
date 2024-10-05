import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGoogletranslate } from "react-icons/si";
import { Button } from "./button";

export function ContactWidget() {
  return (
    <ul className="flex items-center justify-center gap-3 py-4 lg:hidden">
      <li>
        <Button variant="outline" size="icon">
          <RiWhatsappFill className="size-5" />
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon">
          <PiMapPinFill className="size-5" />
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon">
          <SiGoogletranslate className="size-5" />
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon">
          <FaEnvelope className="size-5" />
        </Button>
      </li>
    </ul>
  );
}
