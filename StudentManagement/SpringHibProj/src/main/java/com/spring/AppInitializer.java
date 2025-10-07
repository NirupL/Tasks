package com.spring;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;


import com.spring.config.HibernateConfig;
import com.spring.config.WebMvcConfig;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        // Root configs: Hibernate + global beans
        return new Class[] { HibernateConfig.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        // Web layer configs: CORS + MVC controllers
        return new Class[] { WebMvcConfig.class }; // removed HibernateConfig
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }
}
