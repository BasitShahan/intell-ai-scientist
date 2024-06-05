'use client'
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
    const [isActive, setIsActive] = useState<'paperPattern' | 'guideline'>('paperPattern');

    const handleClick = (side: 'paperPattern' | 'guideline') => {
        setIsActive(side);
    };

    return (
        <div>
            <div className="flex w-fit rounded-lg overflow-hidden font-medium">
                <div
                    onClick={() => handleClick('paperPattern')}
                    className={`cursor-pointer transition-all duration-300 text-center py-2 w-36 px-4 ${isActive === 'paperPattern' ? 'bg-gradient-to-r text-white from-[#1BB69C] to-[#30B979]' : 'bg-[#F0F4F5] text-black'
                        }`}
                >
                    Paper Pattern
                </div>
                <div
                    onClick={() => handleClick('guideline')}
                    className={`cursor-pointer transition-all duration-300 text-center py-2 w-36 px-4 ${isActive === 'guideline' ? 'bg-gradient-to-r text-white from-[#1BB69C] to-[#30B979]' : 'bg-[#F0F4F5] text-black'
                        }`}
                >
                    Guideline
                </div>
            </div>
            <div className="mt-4">
                {isActive === 'paperPattern' && (
                    <div className="">

                    </div>
                )}
                {isActive === 'guideline' && (
                    <div className=" pt-10 transition-all duration-300 max-sm:text-sm text-base text-black font-medium bg-white">
                        <p>Please carefully read each question and encircle the correct option. <br /><br />

                            • Use a blue or black pen to circle your answer. However, students from Pre-Level to Grade 4 may use a pencil. <br /><br />

                            • Following each question are several possible answers or choices. <br /><br />

                            • Circle only ONE option for EACH question. 5 marks will be deducted for incorrect or blank answers. <br /><br />

                            • Avoid overwriting and erasing. Overwritten or multiple selected answers will be marked as incorrect. <br /><br />

                            • Do not fold or crease your answer sheet. <br /><br />

                            Many of you may have multiple Google Accounts on your device. Before taking a test on AI Scientist, ensure you log out of all
                            accounts and log in with the correct Google Account. Do not use Incognito or Private Mode. <br /><br />

                            Here are some guidelines on the preferred browser/device for a AI Scientist’s test: <br /><br />

                            On iPhone and iPad: Use Safari. On Windows, Android, and other devices: Use an updated browser. If your device has an older
                            browser version, update it to the latest version. If updating is not possible, consider upgrading your Operating System. If none
                            of these options work, try a different device. Ensure good hardware specifications: Although we cannot list all hardware require-
                            ments, it is advantageous to use a phone or laptop that is not more than 3 years old.AI Scientist’s  software continuously monitors
                            your camera and audio feeds, requiring substantial processing power. It's essential for your device to handle this load. Change
                            device if necessary: If AI Scientist Software doesn't function on your current device, there is no solution from our end. You may
                            need to switch to a different laptop or  smartphone. Your device might run other websites perfectly but fail to run AI software
                            due to its intensive processing requirements. <br /><br />

                            How does AI Scientist's software identify cheating? <br /><br />

                            AI scientist's software is an automated tool designed to prevent cheating during online tests. It monitors students' camera,
                            microphone, and screen activity. For instance, attempting to search for answers on Google will be detected. Reports of
                            suspicious behavior detected during the test are generated. <br /><br />

                            At the test's conclusion, our proprietary AI (Artificial Intelligence) engine computes a trust score based on collected evidence.
                            This score considers the frequency and duration of violations. The AI engine leverages data from previous test-takers to
                            distinguish between deliberate malpractice and unintentional violations. <br /><br />
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToggleButton;
