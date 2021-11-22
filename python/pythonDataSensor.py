import time
from machine import Pin, ADC
from wifi_lib import conecta
from umqttsimple import MQTTClient
import dht
import machine

wifi_ssid = 'Rede_Oi 2.4G'
wifi_password = 'Gmlc@11031912*'

mqtt_username = 'd06e03e0-48c9-11ec-9f5b-45181495093e'
mqtt_password = 'cdc6b6724bd08edaa751773c227c3b2688df64b7'
mqtt_client_id = 'dc50ec40-48c9-11ec-bbfc-979c23804144'
mqtt_server = 'mqtt.mydevices.com'
mqtt_port = 1883

led = Pin(2, Pin.OUT)

pot = ADC(Pin(34))
pot.atten(ADC.ATTN_11DB)

temp = dht.DHT11(machine.Pin(4))

print('Conecting...')
station = conecta(wifi_ssid, wifi_password)

if not station.isconnected():
    print('Could not connect...try again')
else:
    print('Success')
    print('The conversion will start now')
    client = MQTTClient(mqtt_client_id, mqtt_server, mqtt_port, mqtt_username, mqtt_password)
    client.connect()
    time.sleep(1)
    
    
while True:
    led.value(1)
    
    for i in range(10000000000):
        print('Check IOT values on Cayenne Website')
        
        porcentagem = (1-(pot.read())/4095)*100
        temp.measure()
        temperatura = temp.temperature()
        umidade = temp.humidity()
        
        client.publish('v1/'+mqtt_username+'/things/'+mqtt_client_id +'/data/0',str(porcentagem))
        client.publish('v1/'+mqtt_username+'/things/'+mqtt_client_id +'/data/1',str(temperatura))
        client.publish('v1/'+mqtt_username+'/things/'+mqtt_client_id +'/data/2',str(umidade))
        time.sleep(3)

    client.disconnect()
    station.disconnect()