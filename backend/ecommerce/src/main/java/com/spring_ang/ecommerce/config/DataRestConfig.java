package com.spring_ang.ecommerce.config;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.spring_ang.ecommerce.entity.Product;
import com.spring_ang.ecommerce.entity.ProductCategory;

//EXPOSE ID'S ON JSON
@Component
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        

        config.exposeIdsFor(ProductCategory.class, Product.class);
    }
}