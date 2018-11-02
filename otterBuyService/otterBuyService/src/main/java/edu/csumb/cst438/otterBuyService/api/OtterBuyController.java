package edu.csumb.cst438.otterbuyservice.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtterBuyController{

    @GetMapping("/products")
    @ResponseBody
    String getProducts(){
        return "SOME Products";
    }

}