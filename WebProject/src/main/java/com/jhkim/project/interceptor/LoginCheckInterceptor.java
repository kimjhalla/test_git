package com.jhkim.project.interceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.jhkim.project.dto.UserDTO;
import com.jhkim.project.mapper.UserMapper;
import com.jhkim.project.param.LoginParam;

public class LoginCheckInterceptor extends HandlerInterceptorAdapter{
	
	@Resource(name="userMapper")
	UserMapper userMapper;
	
	private static final Logger logger = LoggerFactory.getLogger(LoginCheckInterceptor.class);
	
	
	
	@Override
	public boolean preHandle(HttpServletRequest request,HttpServletResponse response,Object handler) throws Exception{
		logger.info("Interceptor");
		HttpSession session = request.getSession(false);
		
		UserDTO userDTO = new UserDTO();		
		if(session == null){
			response.sendRedirect(request.getContextPath()+"/");
			return false;
		}
		
		userDTO = userMapper.selectUserData(new LoginParam());
		
		if(userDTO == null){
			response.sendRedirect(request.getContextPath()+"/");
			return false;
		}
		
		return true;
		
	}
}
