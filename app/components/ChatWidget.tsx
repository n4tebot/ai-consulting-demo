'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatWidgetProps {
  businessName: string
  businessType: 'dental' | 'hvac' | 'medspa' | 'law'
}

const businessAvatars = {
  dental: '🦷',
  hvac: '❄️',
  medspa: '✨',
  law: '⚖️'
}

const getSmartResponse = (userMessage: string, businessType: string, businessName: string): string => {
  const message = userMessage.toLowerCase()
  
  // Appointment/booking keywords
  if (message.includes('appointment') || message.includes('book') || message.includes('schedule')) {
    if (businessType === 'dental') return "I'd be happy to help you schedule an appointment! We have openings this week. You can book online or call us at (214) 555-0123. What type of service are you looking for?"
    if (businessType === 'hvac') return "We can schedule a service call today! For emergency repairs, we're available 24/7. Call (214) 555-0123 or book online. What's your HVAC issue?"
    if (businessType === 'medspa') return "Let's book your consultation! We offer complimentary consultations for all treatments. Available this week - call (214) 555-0123 or book online. What treatment interests you?"
    if (businessType === 'law') return "I can schedule your free consultation! We offer 30-minute complimentary consultations for new clients. Call (214) 555-0123. What legal matter do you need help with?"
  }
  
  // Pricing/cost/insurance keywords
  if (message.includes('price') || message.includes('cost') || message.includes('insurance') || message.includes('afford')) {
    if (businessType === 'dental') return "We accept most major insurance plans and offer flexible payment options. A typical cleaning is $120, and we provide detailed estimates before any treatment. Would you like pricing for a specific service?"
    if (businessType === 'hvac') return "Service calls start at $89, and we provide free estimates on installations. We offer financing options for larger projects. What type of service do you need pricing for?"
    if (businessType === 'medspa') return "Treatment pricing varies by service. Botox starts at $12/unit, facials from $85. We offer package deals and financing. What treatment would you like pricing for?"
    if (businessType === 'law') return "We offer competitive rates and various fee structures including contingency options for applicable cases. Consultations are always free. What type of legal matter are you considering?"
  }
  
  // Emergency/urgent keywords
  if (message.includes('emergency') || message.includes('urgent') || message.includes('broken') || message.includes('help')) {
    if (businessType === 'dental') return "For dental emergencies, call us immediately at (214) 555-0123. We offer same-day emergency appointments for severe pain, broken teeth, or trauma."
    if (businessType === 'hvac') return "AC or heating emergency? We're here 24/7! Call (214) 555-0123 for immediate service. Our technicians are standing by for urgent repairs."
    if (businessType === 'medspa') return "For skincare emergencies or adverse reactions, please contact us at (214) 555-0123. For medical emergencies, call 911 or visit your nearest ER."
    if (businessType === 'law') return "For legal emergencies requiring immediate attention, call our 24-hour line at (214) 555-0123. We handle urgent matters including arrests, restraining orders, and time-sensitive issues."
  }
  
  // Hours/open keywords
  if (message.includes('hours') || message.includes('open') || message.includes('closed') || message.includes('time')) {
    if (businessType === 'dental') return "We're open Monday-Friday 8am-6pm, Saturday 9am-3pm. Evening appointments available on request. Call (214) 555-0123 to schedule."
    if (businessType === 'hvac') return "Service hours are Monday-Friday 7am-7pm, Saturday 8am-5pm. Emergency repairs available 24/7. Call (214) 555-0123 anytime!"
    if (businessType === 'medspa') return "We're open Tuesday-Saturday 9am-7pm, Sunday 10am-5pm. Closed Mondays. Book online 24/7 or call (214) 555-0123."
    if (businessType === 'law') return "Office hours are Monday-Friday 8am-6pm. Emergency consultations available by appointment. Call our main line at (214) 555-0123."
  }
  
  // Location/directions keywords
  if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('directions')) {
    return `We're located in McKinney, TX. Visit our contact page for exact address and directions, or call (214) 555-0123. We serve all of Collin County!`
  }
  
  // Default friendly response
  const defaultResponses = [
    `Hi! I'm the ${businessName} virtual assistant. How can I help you today? Feel free to ask about appointments, services, or any questions you have!`,
    `Welcome to ${businessName}! I'm here to help with any questions about our services, scheduling, or anything else you need. What can I assist you with?`,
    `Hello! Thanks for visiting ${businessName}. I can help you with booking appointments, answer questions about our services, or connect you with our team. How may I help?`
  ]
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export default function ChatWidget({ businessName, businessType }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `Hi! Welcome to ${businessName}. I'm here to help answer questions and assist with booking. How can I help you today?`,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length, businessName])
  
  const sendMessage = async () => {
    if (!inputText.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500))
    
    const responseText = getSmartResponse(userMessage.text, businessType, businessName)
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date()
    }
    
    setIsTyping(false)
    setMessages(prev => [...prev, aiResponse])
  }
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }
  
  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-xl text-white flex items-center justify-center text-xl md:h-16 md:w-16 animate-fade-in-up hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <div className={`transition-all duration-200 ${isOpen ? 'rotate-0' : 'rotate-0'}`}>
          {isOpen ? '✕' : '💬'}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in-up"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Panel */}
          <div className="fixed bottom-6 right-6 z-40 w-[calc(100vw-3rem)] h-[calc(100vh-6rem)] md:w-96 md:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col md:bottom-24 animate-fade-in-up origin-bottom-right">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    {businessAvatars[businessType]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{businessName}</h3>
                    <p className="text-xs text-white/80">AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    disabled={isTyping}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  )
}