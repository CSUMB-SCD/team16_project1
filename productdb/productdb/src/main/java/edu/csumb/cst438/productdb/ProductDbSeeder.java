package edu.csumb.cst438.productdb;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import edu.csumb.cst438.productdb.entities.Description;
import edu.csumb.cst438.productdb.entities.Image;
import edu.csumb.cst438.productdb.entities.Price;
import edu.csumb.cst438.productdb.entities.Product;

@Component
public class ProductDbSeeder implements CommandLineRunner{
    ProductRepository productRepo;
    @Override
    public void run(String... args) throws Exception {
        Product otter = new Product(new Image("https://i.pinimg.com/736x/04/7f/46/047f468286c538988a279d14027ef3b5.jpg")
        ,new Description("Otter Plush", "It's an Otter" ), new Price(25.99),5);

        Product giraffe = new Product(new Image("data:image/jpeg;base64,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")
        ,new Description("Giraffe Plush", "It's a Girraffe" ), new Price(19.99),5);

        Product csumbDog = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/2029-CUDDLEBUD-WDMK-Puppy?$GMCategory$&$MoreColors$")
        ,new Description("CSUMB Dog Plush", "Cuddle up this winter with a CSUMB dog Plush" ), new Price(16.99),5);
  
        Product csumbBear1 = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/2029-FLBB-MSCT-Tan-Bear?$GMCategory$&$New$")
        ,new Description("CSUMB 10\" Bear Plush", "It's a soft bear" ), new Price(16.99),5);

        Product csumbBearGrey = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/6-66-1B--1P-2-Brown-Grey?$GMCategory$")
        ,new Description("CSUMB 8 1/2\" Bear Plush, Grey", "It's a bear with a grey shirt" ), new Price(19.99),5);

        Product csumbBearPink = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/6-66-1B--1P-1-Brown-Pink?$GMCategory$")
        ,new Description("CSUMB 8 1/2\" Bear Plush, Pink", "It's a bear with a pink shirt" ), new Price(19.99),5);

        Product csumbBearBlue = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/6-66-1B--1P--Brown-Navy?$GMCategory$")
        ,new Description("CSUMB 8 1/2\" Bear Plush, Blue", "It's a bear with a blue shirt" ), new Price(19.99),5);

        Product csumbMonkey = new Product(new Image("https://bkstr.scene7.com/is/image/Bkstr/2029-KEYC-MSCT-Monkey?$GMSearchResults$&$MoreColors$")
        ,new Description("CSUMB Monkey Plush Keychain", "It's a plushy and a keychain" ), new Price(10.99),5);
        
        productRepo.deleteAll();
        List<Product> products = Arrays.asList(otter,giraffe,csumbDog,csumbBear1,csumbBearGrey,csumbBearPink,csumbBearBlue,csumbMonkey);
        productRepo.saveAll(products);
    }
}