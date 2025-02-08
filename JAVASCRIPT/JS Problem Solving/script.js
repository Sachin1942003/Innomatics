//1.ATM
function atmWithdrawal(balance, amount, pin, enteredPin) {
   if (enteredPin !== pin) return "Incorrect PIN";
   if (amount > balance) return "Insufficient Funds";
   if (amount % 100 !== 0) return "Enter amount in multiples of 100";
   return `Withdrawal successful. Remaining balance: ${balance - amount}`;
 }
 
 function runAtmWithdrawal() {
   const balance = parseFloat(document.getElementById("balance").value);
   const amount = parseFloat(document.getElementById("amount").value);
   const pin = parseInt(document.getElementById("pin").value);
   const enteredPin = parseInt(document.getElementById("enteredPin").value);
   const result = atmWithdrawal(balance, amount, pin, enteredPin);
   document.getElementById("atmResult").textContent = result;
 }
 
 // 2. Online Shopping 
 function calculateFinalAmount(orderAmount) {
   let discount = 0;
   if (orderAmount > 1000) discount = 0.20 * orderAmount;
   else if (orderAmount >= 500) discount = 0.10 * orderAmount;
 
   const discountedAmount = orderAmount - discount;
   const shipping = discountedAmount > 50 ? 0 : 10;
   return discountedAmount + shipping;
 }
 
 function runCalculateFinalAmount() {
   const orderAmount = parseFloat(document.getElementById("orderAmount").value);
   const result = calculateFinalAmount(orderAmount);
   document.getElementById("shoppingResult").textContent = `Final Amount: $${result.toFixed(2)}`;
 }
 
 // 3. Student Grading 
 function calculateGrade(marks, attendance) {
   if (attendance > 90) marks += 5;
   if (marks >= 90) return "A";
   else if (marks >= 80) return "B";
   else if (marks >= 70) return "C";
   else if (marks >= 60) return "D";
   else return "F";
 }
 
 function runCalculateGrade() {
   const marks = parseFloat(document.getElementById("marks").value);
   const attendance = parseFloat(document.getElementById("attendance").value);
   const result = calculateGrade(marks, attendance);
   document.getElementById("gradeResult").textContent = `Grade: ${result}`;
 }
 
 // 4.  Traffic Light 
 function trafficLightControl(density) {
   switch (density) {
     case "Heavy Traffic": return 60;
     case "Moderate Traffic": return 40;
     case "Light Traffic": return 20;
     default: return 0;
   }
 }
 
 function runTrafficLightControl() {
   const density = document.getElementById("density").value;
   const result = trafficLightControl(density);
   document.getElementById("trafficResult").textContent = `Green Time: ${result} seconds`;
 }
 
 // 5. Movie Ticket Pricing
 function calculateTicketPrice(age, showTime) {
   let price = 12;
   if (showTime < 17) price *= 0.80; 
   if (age > 60) price *= 0.70; 
   else if (age < 12) price *= 0.60; 
   return price.toFixed(2);
 }
 
 function runCalculateTicketPrice() {
   const age = parseInt(document.getElementById("age").value);
   const showTime = parseInt(document.getElementById("showTime").value);
   const result = calculateTicketPrice(age, showTime);
   document.getElementById("ticketResult").textContent = `Ticket Price: $${result}`;
 }
 
 // 6. Job Application 
 function isEligibleForJob(age, experience, qualification) {
   return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
 }
 
 function runIsEligibleForJob() {
   const age = parseInt(document.getElementById("jobAge").value);
   const experience = parseInt(document.getElementById("experience").value);
   const qualification = document.getElementById("qualification").value;
   const result = isEligibleForJob(age, experience, qualification);
   document.getElementById("jobResult").textContent = result ? "Eligible" : "Not Eligible";
 }
 
 // 7. E-commerce Coupon 
 function applyCoupon(orderAmount, couponCode) {
   if (couponCode === "DISCOUNT10" && orderAmount > 500) return orderAmount * 0.90;
   else if (couponCode === "FREESHIP" && orderAmount > 200) return orderAmount;
   else return orderAmount;
 }
 
 function runApplyCoupon() {
   const orderAmount = parseFloat(document.getElementById("couponOrderAmount").value);
   const couponCode = document.getElementById("couponCode").value;
   const result = applyCoupon(orderAmount, couponCode);
   document.getElementById("couponResult").textContent = `Final Price: $${result.toFixed(2)}`;
 }
 
 // 8. Fitness 
 function choosePlan(wantsTrainer, wantsDietPlan) {
   if (wantsTrainer && wantsDietPlan) return "VIP ($80/month)";
   else if (wantsTrainer) return "Premium ($50/month)";
   else return "Basic ($20/month)";
 }
 
 function runChoosePlan() {
   const wantsTrainer = document.getElementById("wantsTrainer").checked;
   const wantsDietPlan = document.getElementById("wantsDietPlan").checked;
   const result = choosePlan(wantsTrainer, wantsDietPlan);
   document.getElementById("fitnessResult").textContent = `Suggested Plan: ${result}`;
 }
 
 // 9. Electricity Bill
 function calculateElectricityBill(units, timeOfDay) {
   let rate;
   if (units < 100) rate = 5;
   else if (units <= 300) rate = 4;
   else rate = 3;
 
   let total = units * rate;
   if (timeOfDay === "Peak hours") total *= 1.10;
   return total.toFixed(2);
 }
 
 function runCalculateElectricityBill() {
   const units = parseFloat(document.getElementById("units").value);
   const timeOfDay = document.getElementById("timeOfDay").value;
   const result = calculateElectricityBill(units, timeOfDay);
   document.getElementById("electricityResult").textContent = `Total Bill: $${result}`;
 }
 
 // 10. Flight Ticket 
 function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
   let fare = 300;
   if (classType === "Business") fare += 200;
   else if (classType === "First") fare += 500;
 
   if (luggageWeight > 20) fare += Math.ceil((luggageWeight - 20) / 10) * 50;
 
   if (isStudent) fare *= 0.85;
   else if (isSenior) fare *= 0.90;
 
   return fare.toFixed(2);
 }
 
 function runCalculateFlightFare() {
   const classType = document.getElementById("classType").value;
   const luggageWeight = parseFloat(document.getElementById("luggageWeight").value);
   const isStudent = document.getElementById("isStudent").checked;
   const isSenior = document.getElementById("isSenior").checked;
   const result = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
   document.getElementById("flightResult").textContent = `Final Fare: $${result}`;
 }