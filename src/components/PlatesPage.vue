<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Vista en vivo de la camara</h2>
        Camara actual: <code v-if="device">{{ device.label }}</code>
        <div class="border">
          <vue-web-cam
            ref="camera"
            :device-id="deviceId"
            width="100%"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"
          />
        </div>
        <div class="row">
          <div class="col-md-12">
            <select v-model="camera">
              <option>-- Select Device --</option>
              <option
                v-for="device in devices"
                :key="device.deviceId"
                :value="device.deviceId">
                {{ device.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="patente">
          La patente reconocida es: {{ current_plate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";
export default {
    name: "App",
    components: {
        "vue-web-cam": WebCam
    },
    data() {
        return {
            img: null,
            camera: null,
            deviceId: null,
            devices: [],
            current_plate: "AAAA99"
        };
    },
    mounted: function () {
      window.setInterval(() => {
        this.onCapture()
      }, 3000)
    },
    computed: {
        device: function() {
            return this.devices.find(n => n.deviceId === this.deviceId);
        }
    },
    watch: {
        camera: function(id) {
            this.deviceId = id;
        },
        devices: function() {
            // Once we have a list select the first one
            const [first, ...tail] = this.devices;
            if (first) {
                this.camera = first.deviceId;
                this.deviceId = first.deviceId;
            }
        }
    },
    methods: {
        onCapture() {
            this.img = this.$refs.camera.capture();
            this.plateRecognition(this.img)
        },
        onError(error) {
            console.log("Ocurrio el siguiente error intentando obtener la imagen: ", error);
        },
        onCameras(cameras) {
            this.devices = cameras;
        },
        onCameraChange(deviceId) {
            this.deviceId = deviceId;
            this.camera = deviceId;
        },
        async plateRecognition(img) {
          this.current_plate = await console.log('LLAMAR FUNCION QUE RECONOCE PATENTE!!!')
        }
    }
};
</script>