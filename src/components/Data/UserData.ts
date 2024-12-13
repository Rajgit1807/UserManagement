interface UserData {
    id: number;
    name: string;
    email: string;
    password: string;
    mobileNo: string;
    state: string;
    city: string;
    country: string;
    active: boolean;
    registrationDate: string;
}

const userData: UserData[] = [
    { id: 1, name: 'John Doe', email: 'user1@example.com', password: 'passitword1', mobileNo: '9876543210', state: 'California', city: 'Los Angeles', country: 'USA', active: true, registrationDate: '2024-07-15' },
    { id: 2, name: 'Jane Smith', email: 'user2@example.com', password: 'passitword2', mobileNo: '9876543211', state: 'Texas', city: 'Houston', country: 'USA', active: false, registrationDate: '2024-01-20' },
    { id: 3, name: 'Emily Johnson', email: 'user3@example.com', password: 'passitword3', mobileNo: '9876543212', state: 'New York', city: 'New York City', country: 'USA', active: true, registrationDate: '2023-11-05' },
    { id: 4, name: 'Michael Brown', email: 'user4@example.com', password: 'passitword4', mobileNo: '9876543213', state: 'Florida', city: 'Miami', country: 'USA', active: false, registrationDate: '2024-02-12' },
    { id: 5, name: 'David Wilson', email: 'user5@example.com', password: 'passitword5', mobileNo: '9876543214', state: 'Illinois', city: 'Chicago', country: 'USA', active: true, registrationDate: '2023-06-20' },
    { id: 6, name: 'Sarah Davis', email: 'user6@example.com', password: 'passitword6', mobileNo: '9876543215', state: 'Arizona', city: 'Phoenix', country: 'USA', active: false, registrationDate: '2024-03-10' },
    { id: 7, name: 'Robert Martinez', email: 'user7@example.com', password: 'passitword7', mobileNo: '9876543216', state: 'Colorado', city: 'Denver', country: 'USA', active: true, registrationDate: '2023-12-25' },
    { id: 8, name: 'Jessica Garcia', email: 'user8@example.com', password: 'passitword8', mobileNo: '9876543217', state: 'Nevada', city: 'Las Vegas', country: 'USA', active: false, registrationDate: '2024-08-30' },
    { id: 9, name: 'William Lopez', email: 'user9@example.com', password: 'passitword9', mobileNo: '9876543218', state: 'Georgia', city: 'Atlanta', country: 'USA', active: true, registrationDate: '2023-05-18' },
    { id: 10, name: 'Karen Harris', email: 'user10@example.com', password: 'passitword10', mobileNo: '9876543219', state: 'New Jersey', city: 'Newark', country: 'USA', active: false, registrationDate: '2024-11-14' },
    { id: 11, name: 'James Clark', email: 'user11@example.com', password: 'passitword11', mobileNo: '9876543220', state: 'Michigan', city: 'Detroit', country: 'USA', active: true, registrationDate: '2023-06-07' },
    { id: 12, name: 'Susan Lewis', email: 'user12@example.com', password: 'passitword12', mobileNo: '9876543221', state: 'North Carolina', city: 'Charlotte', country: 'USA', active: false, registrationDate: '2024-10-19' },
    { id: 13, name: 'Matthew Robinson', email: 'user13@example.com', password: 'passitword13', mobileNo: '9876543222', state: 'Pennsylvania', city: 'Philadelphia', country: 'USA', active: true, registrationDate: '2023-04-01' },
    { id: 14, name: 'Elizabeth Walker', email: 'user14@example.com', password: 'passitword14', mobileNo: '9876543223', state: 'Ohio', city: 'Columbus', country: 'USA', active: false, registrationDate: '2024-12-11' },
    { id: 15, name: 'Joseph Hall', email: 'user15@example.com', password: 'passitword15', mobileNo: '9876543224', state: 'Virginia', city: 'Richmond', country: 'USA', active: true, registrationDate: '2023-02-23' },
    { id: 16, name: 'Barbara Allen', email: 'user16@example.com', password: 'passitword16', mobileNo: '9876543225', state: 'Washington', city: 'Seattle', country: 'USA', active: false, registrationDate: '2024-08-05' },
    { id: 17, name: 'Richard Young', email: 'user17@example.com', password: 'passitword17', mobileNo: '9876543226', state: 'Tennessee', city: 'Nashville', country: 'USA', active: true, registrationDate: '2023-11-30' },
    { id: 18, name: 'Margaret King', email: 'user18@example.com', password: 'passitword18', mobileNo: '9876543227', state: 'Indiana', city: 'Indianapolis', country: 'USA', active: false, registrationDate: '2024-05-14' },
    { id: 19, name: 'Charles Wright', email: 'user19@example.com', password: 'passitword19', mobileNo: '9876543228', state: 'Missouri', city: 'Kansas City', country: 'USA', active: true, registrationDate: '2023-09-10' },
    { id: 20, name: 'Dorothy Scott', email: 'user20@example.com', password: 'passitword20', mobileNo: '9876543229', state: 'Massachusetts', city: 'Boston', country: 'USA', active: false, registrationDate: '2024-01-22' },
    { id: 21, name: 'Akira Tanaka', email: 'user21@example.com', password: 'passitword21', mobileNo: '9876543230', state: 'Tokyo', city: 'Tokyo', country: 'Japan', active: true, registrationDate: '2023-06-18' },
    { id: 22, name: 'Yuki Suzuki', email: 'user22@example.com', password: 'passitword22', mobileNo: '9876543231', state: 'Osaka', city: 'Osaka', country: 'Japan', active: false, registrationDate: '2024-02-25' },
    { id: 23, name: 'Hiroshi Nakamura', email: 'user23@example.com', password: 'passitword23', mobileNo: '9876543232', state: 'Kanagawa', city: 'Yokohama', country: 'Japan', active: true, registrationDate: '2023-09-10' },
    { id: 24, name: 'Maria Rossi', email: 'user24@example.com', password: 'passitword24', mobileNo: '9876543233', state: 'Lombardy', city: 'Milan', country: 'Italy', active: false, registrationDate: '2024-12-31' },
    { id: 25, name: 'Giovanni Bianchi', email: 'user25@example.com', password: 'passitword25', mobileNo: '9876543234', state: 'Lazio', city: 'Rome', country: 'Italy', active: true, registrationDate: '2023-06-20' },
    { id: 26, name: 'Elena Colombo', email: 'user26@example.com', password: 'passitword26', mobileNo: '9876543235', state: 'Veneto', city: 'Venice', country: 'Italy', active: false, registrationDate: '2024-09-10' },
    { id: 27, name: 'Priya Patel', email: 'user27@example.com', password: 'passitword27', mobileNo: '9876543236', state: 'Maharashtra', city: 'Mumbai', country: 'India', active: true, registrationDate: '2023-12-25' },
    { id: 28, name: 'Rajesh Kumar', email: 'user28@example.com', password: 'passitword28', mobileNo: '9876543237', state: 'Karnataka', city: 'Bangalore', country: 'India', active: false, registrationDate: '2024-08-30' },
    { id: 29, name: 'Deepa Singh', email: 'user29@example.com', password: 'passitword29', mobileNo: '9876543238', state: 'Tamil Nadu', city: 'Chennai', country: 'India', active: true, registrationDate: '2023-05-18' },
    { id: 30, name: 'Sarah Thompson', email: 'user30@example.com', password: 'passitword30', mobileNo: '9876543239', state: 'Ontario', city: 'Toronto', country: 'Canada', active: false, registrationDate: '2024-11-14' },
    { id: 31, name: 'Michael Chen', email: 'user31@example.com', password: 'passitword31', mobileNo: '9876543240', state: 'Quebec', city: 'Montreal', country: 'Canada', active: true, registrationDate: '2023-06-07' },
    { id: 32, name: 'Emily Wilson', email: 'user32@example.com', password: 'passitword32', mobileNo: '9876543241', state: 'British Columbia', city: 'Vancouver', country: 'Canada', active: false, registrationDate: '2024-10-19' },
    { id: 33, name: 'David Martin', email: 'user33@example.com', password: 'passitword33', mobileNo: '9876543242', state: 'Alberta', city: 'Calgary', country: 'Canada', active: true, registrationDate: '2023-04-01' },
    { id: 34, name: 'Jennifer Lee', email: 'user34@example.com', password: 'passitword34', mobileNo: '9876543243', state: 'Ontario', city: 'Ottawa', country: 'Canada', active: false, registrationDate: '2024-12-11' },
    { id: 35, name: 'Ryan Brown', email: 'user35@example.com', password: 'passitword35', mobileNo: '9876543244', state: 'Quebec', city: 'Quebec City', country: 'Canada', active: true, registrationDate: '2023-02-23' },
    { id: 36, name: 'Sophie Anderson', email: 'user36@example.com', password: 'passitword36', mobileNo: '9876543245', state: 'Manitoba', city: 'Winnipeg', country: 'Canada', active: false, registrationDate: '2024-08-05' },
    { id: 37, name: 'Alex Rodriguez', email: 'user37@example.com', password: 'passitword37', mobileNo: '9876543246', state: 'British Columbia', city: 'Victoria', country: 'Canada', active: true, registrationDate: '2023-11-30' },
    { id: 38, name: 'Emma Taylor', email: 'user38@example.com', password: 'passitword38', mobileNo: '9876543247', state: 'Alberta', city: 'Edmonton', country: 'Canada', active: false, registrationDate: '2024-05-14' },
    { id: 39, name: 'Daniel Kim', email: 'user39@example.com', password: 'passitword39', mobileNo: '9876543248', state: 'Ontario', city: 'Hamilton', country: 'Canada', active: true, registrationDate: '2023-09-10' },
    { id: 40, name: 'Olivia White', email: 'user40@example.com', password: 'passitword40', mobileNo: '9876543249', state: 'Quebec', city: 'Laval', country: 'Canada', active: false, registrationDate: '2024-01-22' },
    { id: 41, name: 'Roberto Verdi', email: 'user41@example.com', password: 'passitword41', mobileNo: '9876543250', state: 'Lombardy', city: 'Bergamo', country: 'Italy', active: true, registrationDate: '2023-07-15' },
    { id: 42, name: 'Sophia Rossi', email: 'user42@example.com', password: 'passitword42', mobileNo: '9876543251', state: 'Lazio', city: 'Latina', country: 'Italy', active: false, registrationDate: '2024-03-30' },
    { id: 43, name: 'Marco Bianchi', email: 'user43@example.com', password: 'passitword43', mobileNo: '9876543252', state: 'Veneto', city: 'Padua', country: 'Italy', active: true, registrationDate: '2023-10-05' },
    { id: 44, name: 'Keiko Yamamoto', email: 'user44@example.com', password: 'passitword44', mobileNo: '9876543253', state: 'Osaka', city: 'Kobe', country: 'Japan', active: false, registrationDate: '2024-04-18' },
    { id: 45, name: 'Satoshi Nakamura', email: 'user45@example.com', password: 'passitword45', mobileNo: '9876543254', state: 'Tokyo', city: 'Yokohama', country: 'Japan', active: true, registrationDate: '2023-08-22' },
    { id: 46, name: 'Ramesh Sharma', email: 'user46@example.com', password: 'passitword46', mobileNo: '9876543255', state: 'Karnataka', city: 'Mysore', country: 'India', active: false, registrationDate: '2024-06-14' },
    { id: 47, name: 'Anjali Gupta', email: 'user47@example.com', password: 'passitword47', mobileNo: '9876543256', state: 'Tamil Nadu', city: 'Coimbatore', country: 'India', active: true, registrationDate: '2023-05-03' },
]
export default userData