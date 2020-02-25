import React from "react";

import Button from "../components/Button";

import Card from "../components/Card";

export default function Home() {
  return (
    <div className="container mx-auto lg:px-4 py-5">
      <Card></Card>
      <Button withLogo linkTo="donate">
        Dönate
      </Button>
    </div>
  );
}
