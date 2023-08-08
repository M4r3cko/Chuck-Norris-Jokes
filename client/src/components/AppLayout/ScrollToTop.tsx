import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

const showReturnToTopButton = 350;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showReturnToTopButton) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Box onClick={scrollToTop} position="fixed" bottom={[20, 45]} right="3">
      <Button
        aria-label="return to top"
        size={"md"}
        rightIcon={<ArrowUpIcon />}
        variant="outline"
      >
        Return to top
      </Button>
    </Box>
  );
};
