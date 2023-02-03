package dev.myung.portfolio.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "dev.myung.portfolio.controllers.portfolioController")
@RequestMapping("/")
public class PortfolioController {
    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getHome() {
        ModelAndView modelAndView = new ModelAndView("home");

        return modelAndView;
    }
}
