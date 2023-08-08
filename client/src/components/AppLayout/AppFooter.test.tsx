import { render, screen } from "@testing-library/react";
import { AppFooter } from "./AppFooter";

describe("AppFooter", () => {
  it("renders MJ Development, Inc. All rights", () => {
    render(<AppFooter />);

    const footerText = `© 2023 MJ Development, Inc. All rights reserved.`;
    const footer = screen.getByText(footerText, { exact: false });
    expect(footer).toBeInTheDocument();

    const facebookIcon = screen.getByLabelText("Facebook");
    expect(facebookIcon).toBeInTheDocument();
    expect(facebookIcon).toHaveAttribute(
      "href",
      "https://www.facebook.com/groups/223130684832725"
    );

    const githubIcon = screen.getByLabelText("GitHub");
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveAttribute(
      "href",
      "https://github.com/chucknorris-io"
    );

    const twitterIcon = screen.getByLabelText("Twitter");
    expect(twitterIcon).toBeInTheDocument();
    expect(twitterIcon).toHaveAttribute(
      "href",
      "https://twitter.com/chucknorrsjokes?lang=en"
    );
  });
});
