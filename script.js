function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Basic greetings and identity
    if (userInput.includes("hello")) {
        return "Hi there! 👋 I'm your bot trainer ATB. What do you want to learn today?";
    } else if (userInput.includes("bye")) {
        return "Goodbye! Come back soon. Stay smooth, stay green, stay growing. 🥑";
    } else if (userInput.includes("how are you")) {
        return "I am doing well, thank you! Ready to guac and roll whenever you are.";
    } else if (userInput.includes("what are you")) {
        return "I am a trainee helper, ATB — short for Avocado Trainer Bot. I'm here to help you grow, one question at a time.";
    } else if (userInput.includes("what is your name")) {
        return "You can call me ATB. TL Arra created me to help trainees like you thrive.";
    
    // Outreach, Lead Gen, LinkedIn
    } else if (userInput.includes("outreach")) {
        return "Outreach is all about building genuine connections. Start by identifying your ideal audience, then craft messages that speak to their needs. Every lead is a seed—nurture it and watch it grow. 🌱";
    } else if (userInput.includes("lead generation")) {
        return "Lead generation is the art of attracting interest. Use value-driven content, clear calls to action, and consistent follow-ups. Time to smash those goals—like a ripe avocado! 🥑";
    } else if (userInput.includes("linkedin")) {
        return "LinkedIn is your digital handshake. Optimize your profile with a clear headline, engaging summary, and relevant keywords. Outreach here should feel personal, not robotic. Let’s make it firm and friendly. 🤝";

    // Kriss AI info
    } else if (userInput.includes("what is kriss ai")) {
        return "Kriss AI is an AI-powered chatbot that lives on clinic websites. It talks to website visitors, answers dental-related questions, and helps guide them toward booking an appointment — 24/7.";
    } else if (userInput.includes("what does kriss means")) {
        return "KRISS stands for Knowledge Research Intelligent Search System.";
    } else if (userInput.includes("what can kriss ai not do")) {
        return "Kriss AI does not automate booking, do follow-ups, or scan your cavities.";
    } else if (userInput.includes("who is the person behind kriss ai")) {
        return "The founder of Kriss AI is Timothy Ngo, a venture capitalist and co-founder of Iozera, a consultancy specializing in AI infrastructure.";
    } else if (userInput.includes("when was kriss ai founded")) {
        return "Kriss AI started in 2021 in Houston, USA, and expanded to the Philippines in 2023.";
    } else if (userInput.includes("why was kriss ai built")) {
        return "Kriss.ai envisions a future where healthcare is more accessible, precise, and proactive. Through AI-driven solutions, it aims to revolutionize the health sector and elevate patient care.";
    } else if (userInput.includes("how does kriss ai works")) {
        return "Kriss AI is installed on dental websites. It's trained on real dental conversations and can answer inquiries about insurance, ADA codes, billing, and even emotional concerns like fear of dentists.";
    } else if (userInput.includes("key features")) {
        return "Kriss AI gives human-like responses, assists front desk staff with repetitive tasks, and boosts revenue by converting website visits into bookings.";
    } else if (userInput.includes("why is kriss ai special")) {
        return "Kriss AI is conversational, company-specific, and industry-specific.";
    } else if (userInput.includes("kriss ai top competitor")) {
        return "Check out the websites of Kriss AI competitors: smartbot360.com and chatbot.com.";

    // Gratitude
    } else if (userInput.includes("thank you")) {
        return "You're welcome! Keep growing and glowing. 🌟";

    // Default fallback
    } else {
        return "I'm not sure how to answer that yet. I'm still learning — just like you! You can always ask your teammates or TL Arra for help.";
    }
}
