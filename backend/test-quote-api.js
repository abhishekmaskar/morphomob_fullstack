import fetch from 'node-fetch';

const API_BASE_URL = 'http://localhost:5000/api';

async function testQuoteAPI() {
  console.log('🧪 Testing Quote API...\n');

  // Test 1: Valid quote request
  console.log('Test 1: Valid quote request');
  const validQuote = {
    serviceType: 'Ready Mix Concrete',
    projectDetails: 'This is a detailed project description that is more than 20 characters long to meet the validation requirements.',
    quantity: '100 cubic meters',
    timeline: 'Immediate (Within 1 week)',
    contactInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '9876543210',
      company: 'Test Company'
    }
  };

  try {
    const response = await fetch(`${API_BASE_URL}/quotes/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validQuote)
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    console.log('✅ Test 1 completed\n');
  } catch (error) {
    console.log('❌ Test 1 failed:', error.message, '\n');
  }

  // Test 2: Invalid quote request (missing required fields)
  console.log('Test 2: Invalid quote request (missing required fields)');
  const invalidQuote = {
    serviceType: '',
    projectDetails: 'Too short',
    timeline: '',
    contactInfo: {
      name: '',
      email: 'invalid-email',
      phone: '123',
      company: 'Test Company'
    }
  };

  try {
    const response = await fetch(`${API_BASE_URL}/quotes/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidQuote)
    });

    const result = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    console.log('✅ Test 2 completed\n');
  } catch (error) {
    console.log('❌ Test 2 failed:', error.message, '\n');
  }
}

// Run the test
testQuoteAPI().catch(console.error); 