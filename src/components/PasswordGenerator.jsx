import { useState} from 'react'

export const PasswordGenerator = () => {
    const [length, setLength] = useState (8);
    const [includeUppercase, setIncludeUppercase] = useState (true);
    const [includeLowercase, setIncludeLowercase] = useState (true);
    const [includeNumbers, setIncludeNumbers] = useState (true);
    const [includeSymbols, setIncludeSymbols] = useState (true);
    const [password, setPassword] = useState ('');

    const generatePassword = () => {
        
        const characters = [];
        if (includeUppercase) {
            characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        }
        if (includeLowercase) {
            characters.push(...'abcdefghijklmnopqrstuvwxyz');
        }
        if (includeNumbers) {
            characters.push(...'0123456789');
        }
        if (includeSymbols) {
            characters.push(...'!@#$%^&*()');
        let generatePassword = [];
        for (let i = 0; i < length; i++) {
            generatePassword.push(characters[Math.floor(Math.random() * characters.length)]);

        }
        setPassword(generatePassword.join(''));
        }
        
    };

    const copyToClipboard = () => {
         
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard');
    };

  return (
        <div className="password-generator">
          <h2>Strong Password Generator</h2>
          <div className="input-group">
            <label htmlFor='num'>Password Length: 
            </label>
            <input type="number"  id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
          </div>
          <div className="checkbox-group">
            <input type="checkbox"  id="upper" checked={includeUppercase}  onChange={(e) => setIncludeUppercase(e.target.checked)} />
            <label htmlFor='upper'>Include Uppercase </label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox"  id="lower" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
            <label htmlFor='lower'>Include Lowercase </label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox"  id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
            <label htmlFor='numbers'>Include Numbers </label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox"  id="symbol" checked={includeSymbols}  onChange={(e) => setIncludeSymbols(e.target.checked)}/>
            <label htmlFor='symbol'>Include Symbol </label>
          </div>
          <button className='generate-btn' onClick={generatePassword}>
            Generate Password</button>
            <div className='generated-password'>
            <input type="text" readOnly   value={password} />
            <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    
  );
};
