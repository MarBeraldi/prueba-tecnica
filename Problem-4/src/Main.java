public class Main {
    static int size = (int) (Math.floor(Math.random()*(10-1+1)+1));
    static int [] array = new int[size];
    static int min = 99999;
    static int max = 0;

    public static void main(String[] args) {

        for(int i=0;i<array.length;i++){
           array[i] = (int) (Math.floor(Math.random()*(1000-1+1)+1));
        }
        System.out.println("Cantidad de elementos: " + array.length);
        for(int i=0;i<array.length;i++){
            System.out.println("Elementos del array: " + array[i]);
        }

        System.out.println("Pares:"+ pares() + "%");
        System.out.println("Impares:"+ impares() + "%");
        System.out.println("Mayores a mil:"+ mil() + "%");
        System.out.println("Maximo:"+ maximo());
        System.out.println("Minimo:"+ minimo());
        System.out.println("Porcentaje que representa el menor numero: "+ min * 100 / max + "%");
        System.out.println("Promedio:"+ promedio() + "%");
    }
    public static int pares() {
        int pares = 0;
        for(int i=0;i<array.length;i++){
            if(array[i] % 2 == 0)
                pares++;
        }
        return pares * 100 / array.length;
    }
    public static int impares() {
        int impares = 0;
        for(int i=0;i<array.length;i++){
            if(array[i] % 2 != 0)
                impares++;
        }
        return impares * 100 / array.length;
    }
    public static int mil (){
        int max = 0;

        for(int i=0;i< array.length;i++){
            if(array[i] > 1000)
                max++;
        }
        return max * 100 / array.length;
    }
    public static int minimo(){

        for(int i=0;i< array.length;i++){
            if(array[i] < min)
                min = array[i];
        }
        return min;
    }
    public static int maximo(){
        for(int i=0;i< array.length;i++){
            if(array[i] > max)
                max = array[i];
        }
        return max;
    }
    public static int promedio()
    {
        int sum = 0;
        for(int i=0;i< array.length;i++){
                sum += array[i];
        }
        return sum/array.length;
    }
}