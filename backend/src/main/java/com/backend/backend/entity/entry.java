package com.backend.backend.entity;

public class entry {
    private String title;
    private String link;

    public entry(String s, String s_) {title=s;link=s_;}
    public String GetTitle() {return title;}
    public String GetLink() {return link;}
}
