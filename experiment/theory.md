### Introduction
<br>
The electronic circuits which perform the mathematical operations such as logarithm and anti-logarithm (exponential) with an amplification are called as Logarithmic amplifier and Anti-Logarithmic amplifier respectively.<br>

### 1)Log Amplifier

A logarithmic amplifier (or a log amplifier) is an electronic circuit that produces an output that is proportional to the logarithm of the applied input. Other applications for log/anti-log amplifiers include signal compression and process control. Signals are often compressed in order to decrease their dynamic range (i.e., the difference between the highest and lowest level signals). In telecommunications systems, this may be required in order to achieve reasonable
voice or data transmission with limited resources. An op-amp based logarithmic amplifier produces a voltage at the output, which is proportional to the logarithm of the voltage applied to the resistor connected to its inverting terminal.         
<center></center><b>𝐼<sub>𝐸</sub> = (𝑒<sup>(qV<sub>E</sub>/𝑘𝑇)</sup> − 1)<br> </b></center>
Since I<sub>C</sub> = I<sub>E</sub> for a grounded base transistor,<br>
<center><b>𝐼<sub>C</sub> = I<sub>s</sub>(𝑒<sup>(qV<sub>E</sub>/𝑘𝑇)</sup> − 1),</b><br></center>
Where  <br>
I<sub>S</sub> = emitter saturation current ≈ 10<sup>-13</sup> A<br>
k = Boltzmann’s Constant<br> 
T = absolute temperature (in K)<br>
Therefore, 𝑒<sup>(qV<sub>E</sub>/𝑘𝑇) </sup>= (I<sub>C</sub>/I<sub>S</sub>)+1 = I<sub>C</sub>/I<sub>S</sub>(nearly equal)<br>
Taking natural log on both sides, we get <br>
<center><b>V<sub>E</sub>=(kT/q)* ln(I<sub>C</sub>/I<sub>S</sub>), also V<sub>E</sub>=-V<sub>0</sub></b><br></center><br>
<center><img src="images/logamp.jpg" style=" height: 180px" align="center"></center><br>
<center><b> Figure 1. Log Amplifier</b></center>

<br>

### 2)Antilog Amplifier 

An anti-logarithmic amplifier, or an anti-log amplifier, is an electronic circuit that produces an output that is proportional to the anti-logarithm of the applied input. This section discusses about the op-amp based anti-logarithmic amplifier in detail.
An op-amp based anti-logarithmic amplifier produces a voltage at the output, which is proportional to the anti-logarithm of the voltage that is applied to the diode connected to its inverting terminal.<br>
The circuit diagram of an op-amp based anti-logarithmic amplifier is shown in the following figure −<br>
<center><img src="images/antilog.jpg" style=" height: 180px" align="center"></center><br><br>
<center><b> Figure 2. Antilog Amplifier </b></center><br><br>
<center><b>V<sub>O</sub>=-R<sub>f</sub>I<sub>s</sub>e<sup>(V<sub>in</sub>/V<sub>T</sub>)</sup></b></center>

Note that, in the above equation the parameters n, V<sub>T</sub> and I<sub>s</sub> are constants. So, the output voltage V<sub>0</sub> will be proportional to the anti-natural logarithm(exponential) of the input voltage V<sub>i</sub>, for a fixed value of feedback resistance R<sub>f</sub>.
 
### Applications 
Two voltages A and B can be multiplied using log and antilog amplifier. Firstly, log of both the voltages is taken and added.<br>
<center><b>log(A) + log(B) = log(AB)</b></center><br></p>
Then antilog is taken and the output obtained is AxB.<br>
Similarly, two voltages can be divided using log and antilog amplifier.</p>






