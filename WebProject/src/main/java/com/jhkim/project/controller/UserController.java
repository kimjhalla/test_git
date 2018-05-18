package com.jhkim.project.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jhkim.project.dto.UserDTO;
import com.jhkim.project.mapper.UserMapper;

@Controller
public class UserController {
	@Resource(name="userMapper")
	UserMapper userMapper;
	
	@RequestMapping(value="/Login", method=RequestMethod.POST)
	public String Login(String id,String pw,Model model){
		Map<String,String> param = new HashMap<String,String>();
		param.put("userId", "");
		param.put("userPw", "");
		UserDTO dto = userMapper.selectUserData(param);
		
		return "";
	}
	
	@RequestMapping(value="/Join", method=RequestMethod.POST)
	public String Join(){
		
		return "";
	}
}
