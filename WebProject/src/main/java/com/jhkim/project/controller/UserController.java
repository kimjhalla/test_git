package com.jhkim.project.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jhkim.project.dto.UserDTO;
import com.jhkim.project.mapper.UserMapper;
import com.jhkim.project.param.LoginParam;
import com.jhkim.project.result.BasicResult;

@Controller
public class UserController {
	@Resource(name="userMapper")
	UserMapper userMapper;
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	@ResponseBody
	public BasicResult Login(@RequestBody LoginParam param){
		BasicResult result = new BasicResult();
		
		try{
			UserDTO dto = userMapper.selectUserData(param);
			
			if(dto == null){				
				result.setResultCode("EF001");
				result.setResultMsg("로그인 실패");
			}
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
		return result;
	}
	
	@RequestMapping(value="/join", method=RequestMethod.GET)
	public String Join(){
		
		return "join";
	}
}
