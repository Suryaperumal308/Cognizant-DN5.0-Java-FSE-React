package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry() {
        return new Country("IN", "India");
    }

    public Country getCountry(String code) {

        if (code.equalsIgnoreCase("IN")) {
            return new Country("IN", "India");
        }

        if (code.equalsIgnoreCase("US")) {
            return new Country("US", "United States");
        }

        return null;
    }
}