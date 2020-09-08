package com.backend.backend.daoimpl;

import com.backend.backend.entity.entry;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class Py {
    public List<entry> getpython(String s) {
        Process proc;
        String line = null;
        List<String> lines = new ArrayList<String>();
        List<entry> E = new ArrayList<entry>();
        try {
            String[] args1 = new String[]{
                    "python",
                    "D:\\Past\\project-backend\\backend\\src\\main\\resources\\introspider.py",//此处为绝对路径，记得修改
                    String.valueOf(s)
            };
            proc = Runtime.getRuntime().exec(args1);

            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream(),"gbk"));
            while ((line = in.readLine()) != null) {
                System.out.println(line);
                lines.add(line);
            }
            in.close();

            int exitVal = proc.waitFor();
            System.out.println("Process exitValue: "+exitVal);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for (int i=0;i<lines.size();i+=2) {
            E.add(new entry(lines.get(i),lines.get(i+1)));
        }
        System.out.println("Java调用python结束");
        return E;
    }
    public static void main(String[] args) {
        Process proc;
        String line = null;
        List<String> lines = new ArrayList<String>();
        String s="bbbb";
        try {
            String[] args1 = new String[]{
                    "python",
                    "D:\\Past\\project-backend\\backend\\src\\main\\resources\\introspider.py",
                    //"C:\\Users\\MashiroSky\\Desktop\\web\\external_search\\src\\main\\resources\\a.py",
                    "bbbb",
            };
            proc = Runtime.getRuntime().exec(args1);

            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream(),"gbk"));
            while ((line = in.readLine()) != null) {
                System.out.println(line);
                lines.add(line);
            }
            in.close();

            int exitVal = proc.waitFor();
            System.out.println("Process exitValue: "+exitVal);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Java调用python结束");

    }
}
