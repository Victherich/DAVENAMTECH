"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <Nav>
      <Logo>
        🌿 DAVENAMTECH
      </Logo>

      <NavLinks ref={menuRef} open={open}>
        <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link href="/aboutus" onClick={()=>setOpen(false)}>About</Link>
        <Link href="/services" onClick={()=>setOpen(false)}>Services</Link>
        <Link href="/contactus" onClick={()=>setOpen(false)}>Contact</Link>
      </NavLinks>

      <Right>
        <CTAButton href="/contactus">Get Started</CTAButton>

        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </Right>
    </Nav>
  );
}

/* ===================== STYLES ===================== */

const Nav = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 8%;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #22c55e;
  letter-spacing: 0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    transition: 0.3s;

    &:hover {
      color: #22c55e;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    background: rgba(15, 23, 42, 0.98);
    width: 220px;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.2rem;

    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s ease;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CTAButton = styled(Link)`
  background: #22c55e;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #16a34a;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 2px;
    background: white;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;